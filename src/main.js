import './styles.css';

import { createAccountMenu } from './account-menu.js';
import { loadGraph } from './api/graph-api.js';
import { restoreSession, startLogin } from './auth/auth-client.js';
import { buildNodeDetails } from './domain/node-details.js';
import { graphToSpatialGraph } from './domain/spatial-adapter.js';
import { SpatialLayoutMode } from './spatial/spatial-layout-mode.js';
import {
  ThemeMode,
  nextThemeMode,
  normalizeThemeMode,
  resolveTheme,
} from './theme.js';


const THEME_STORAGE_KEY = 'noesis:theme:v1';
const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const loginView = document.querySelector('#login-view');
const loadingView = document.querySelector('#loading-view');
const graphView = document.querySelector('#graph-view');
const spatialWorld = document.querySelector('#spatial-world');
const accountMenuHost = document.querySelector('#account-menu-host');
const signInButton = document.querySelector('#sign-in');
const fitGraphButton = document.querySelector('#fit-graph');
const resetCameraButton = document.querySelector('#reset-camera');
const emptyState = document.querySelector('#empty-state');
const statusElement = document.querySelector('#status');
const themeButton = document.querySelector('#theme-button');
const nodeInspector = document.querySelector('#node-inspector');
const nodeInspectorKind = document.querySelector('#node-inspector-kind');
const nodeInspectorKindLabel = document.querySelector('#node-inspector-kind-label');
const nodeInspectorTitle = document.querySelector('#node-inspector-title');
const nodeInspectorBody = document.querySelector('#node-inspector-body');
const nodeInspectorClose = document.querySelector('#node-inspector-close');
const nodeInspectorFocus = document.querySelector('#node-inspector-focus');
const nodeInspectorConnections = document.querySelector('#node-inspector-connections');
const nodeInspectorConnectionsToggle = document.querySelector('#node-inspector-connections-toggle');
const nodeInspectorConnectionsCount = document.querySelector('#node-inspector-connections-count');
const nodeInspectorConnectionList = document.querySelector('#node-inspector-connection-list');

let selectedNodeId = null;
let activeSpatialGraph = { nodes: [], links: [] };
let spatialView = null;
let spatialViewPromise = null;
let disposeAccountMenu = () => {};
let themeMode = normalizeThemeMode(document.documentElement.dataset.themeMode);
let resolvedTheme = resolveTheme(themeMode, systemThemeQuery.matches);
let connectionsCollapsed = window.matchMedia('(max-width: 600px)').matches;


function setStatus(message = '') {
  statusElement.textContent = message;
}


function renderThemeButton() {
  const labels = {
    [ThemeMode.SYSTEM]: 'System',
    [ThemeMode.LIGHT]: 'Light',
    [ThemeMode.DARK]: 'Dark',
  };
  const label = labels[themeMode];
  themeButton.dataset.mode = themeMode;
  themeButton.title = `Appearance: ${label}`;
  themeButton.setAttribute('aria-label', `Appearance: ${label}`);
}


function applyTheme() {
  resolvedTheme = resolveTheme(themeMode, systemThemeQuery.matches);
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.dataset.themeMode = themeMode;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    resolvedTheme === ThemeMode.DARK ? '#0e0d14' : '#f9f8fe',
  );
  spatialView?.setTheme(resolvedTheme);
  renderThemeButton();
}


function storeThemeMode() {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  } catch {
    // The selected theme still applies for this session when storage is disabled.
  }
}


function renderConnectionsCollapsedState() {
  nodeInspectorConnections.classList.toggle('is-collapsed', connectionsCollapsed);
  nodeInspectorConnectionsToggle.setAttribute(
    'aria-expanded',
    String(!connectionsCollapsed),
  );
  nodeInspectorConnectionList.hidden = connectionsCollapsed;
}


function createConnectionRow(connection) {
  const button = document.createElement('button');
  const kind = document.createElement('span');
  const copy = document.createElement('span');
  const title = document.createElement('strong');
  const relation = document.createElement('small');
  const direction = document.createElement('span');
  const incoming = connection.direction === 'incoming';

  button.type = 'button';
  button.className = 'spatial-connection-row';
  button.dataset.nodeId = connection.nodeId;
  button.title = connection.nodeTitle;
  button.setAttribute(
    'aria-label',
    `${incoming ? 'From' : 'To'}: ${connection.nodeTitle}. ${connection.relationLabel}`,
  );

  kind.className = 'spatial-connection-kind';
  kind.dataset.kind = connection.nodeKind;
  kind.setAttribute('aria-hidden', 'true');

  copy.className = 'spatial-connection-copy';
  title.textContent = connection.nodeTitle;
  relation.textContent = connection.relationLabel;
  copy.append(title, relation);

  direction.className = 'spatial-connection-direction';
  direction.textContent = incoming ? '←' : '→';
  direction.setAttribute('aria-hidden', 'true');

  button.append(kind, copy, direction);
  return button;
}


function renderNodeInspector() {
  const details = buildNodeDetails(activeSpatialGraph, selectedNodeId);
  nodeInspector.hidden = !details;
  nodeInspectorConnectionList.replaceChildren();
  nodeInspectorConnections.hidden = !details?.connections.length;
  if (!details) return;

  nodeInspectorKind.dataset.kind = details.kind;
  nodeInspectorKindLabel.textContent = details.kindLabel;
  nodeInspectorTitle.textContent = details.title;
  nodeInspectorBody.textContent = details.body || 'No description yet.';
  nodeInspectorBody.classList.toggle('is-empty', !details.body);

  details.connections.forEach((connection) => {
    nodeInspectorConnectionList.append(createConnectionRow(connection));
  });
  nodeInspectorConnectionsCount.textContent = String(details.connections.length);
  if (details.connections.length) renderConnectionsCollapsedState();
}


function clearNodeSelection({ restoreFocus = false } = {}) {
  selectedNodeId = null;
  spatialView?.setSelectedThought(null);
  renderNodeInspector();
  if (restoreFocus) spatialWorld.focus({ preventScroll: true });
}


function selectNode(nodeId, { focus = false } = {}) {
  if (!buildNodeDetails(activeSpatialGraph, nodeId)) {
    clearNodeSelection();
    return;
  }
  selectedNodeId = nodeId;
  spatialView?.setSelectedThought(nodeId);
  renderNodeInspector();
  if (focus) spatialView?.focusThought(nodeId);
}


function renderAccountMenu(account = null, { sessionChecking = false } = {}) {
  disposeAccountMenu();
  const accountMenu = createAccountMenu(account, {
    sessionChecking,
    onSignedOut: showSignedOut,
  });
  accountMenuHost.replaceChildren(accountMenu.menu);
  disposeAccountMenu = accountMenu.dispose;
}


async function ensureSpatialView() {
  if (spatialView) return spatialView;
  if (!spatialViewPromise) {
    spatialViewPromise = import('./spatial/spatial-view.js')
      .then(({ createSpatialView }) => {
        spatialView = createSpatialView({
          container: spatialWorld,
          theme: resolvedTheme,
          storageKey: 'noesis:spatial-camera:v1',
          layoutStorageKey: 'noesis:spatial-layout:v1:',
          layoutMode: SpatialLayoutMode.CONSTELLATIONS,
          onThoughtSelect(nodeId) {
            selectNode(nodeId);
          },
          onThoughtActivate(nodeId) {
            selectNode(nodeId, { focus: true });
          },
          onError(message) {
            setStatus(message);
          },
        });
        return spatialView;
      })
      .catch((error) => {
        spatialViewPromise = null;
        throw new Error(`3D rendering is unavailable: ${error.message}`);
      });
  }
  return spatialViewPromise;
}


function showSignedOut() {
  loadingView.hidden = true;
  graphView.hidden = true;
  loginView.hidden = false;
  renderAccountMenu();
  activeSpatialGraph = { nodes: [], links: [] };
  clearNodeSelection();
  spatialView?.deactivate();
}


async function showGraph(account) {
  renderAccountMenu(account);
  setStatus('Loading your knowledge graph…');

  const graph = await loadGraph();
  const spatialGraph = graphToSpatialGraph(graph);
  activeSpatialGraph = spatialGraph;
  if (!buildNodeDetails(activeSpatialGraph, selectedNodeId)) selectedNodeId = null;

  loginView.hidden = true;
  loadingView.hidden = true;
  graphView.hidden = false;
  emptyState.hidden = spatialGraph.nodes.length > 0;

  const view = await ensureSpatialView();
  view.setGraph({
    ...spatialGraph,
    layoutMode: SpatialLayoutMode.CONSTELLATIONS,
    fitAfterLayout: true,
  });
  view.activate();
  renderNodeInspector();
  setStatus('');
}


async function initialize() {
  try {
    const account = await restoreSession();
    if (!account) {
      showSignedOut();
      return;
    }
    await showGraph(account);
  } catch (error) {
    setStatus(error.message);
    showSignedOut();
  }
}


signInButton.addEventListener('click', () => startLogin());
fitGraphButton.addEventListener('click', () => {
  if (!spatialView?.fitAll()) setStatus('The knowledge graph is empty.');
});
resetCameraButton.addEventListener('click', () => spatialView?.resetView());
nodeInspectorClose.addEventListener('click', () => {
  clearNodeSelection({ restoreFocus: true });
});
nodeInspectorFocus.addEventListener('click', () => {
  if (selectedNodeId) spatialView?.focusThought(selectedNodeId);
});
nodeInspectorConnectionsToggle.addEventListener('click', () => {
  connectionsCollapsed = !connectionsCollapsed;
  renderConnectionsCollapsedState();
});
nodeInspectorConnectionList.addEventListener('click', (event) => {
  const row = event.target.closest('[data-node-id]');
  if (row) selectNode(row.dataset.nodeId, { focus: true });
});
themeButton.addEventListener('click', () => {
  themeMode = nextThemeMode(themeMode);
  storeThemeMode();
  applyTheme();
});
systemThemeQuery.addEventListener('change', () => {
  if (themeMode === ThemeMode.SYSTEM) applyTheme();
});
document.addEventListener('pointerdown', (event) => {
  if (event.target.classList.contains('spatial-canvas')) clearNodeSelection();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && selectedNodeId) {
    clearNodeSelection({ restoreFocus: true });
    return;
  }
  if (
    event.key.toLowerCase() === 'f'
    && selectedNodeId
    && !event.ctrlKey
    && !event.metaKey
    && !event.altKey
    && !event.target.closest('input, textarea, [contenteditable="true"]')
  ) {
    event.preventDefault();
    spatialView?.focusThought(selectedNodeId);
  }
});
window.addEventListener('beforeunload', () => spatialView?.deactivate());

applyTheme();
renderAccountMenu(null, { sessionChecking: true });
void initialize();
