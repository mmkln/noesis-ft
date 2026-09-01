import './styles.css';

import { createAccountMenu } from './account-menu.js';
import { loadGraph } from './api/graph-api.js';
import { restoreSession, startLogin } from './auth/auth-client.js';
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

let selectedNodeId = null;
let spatialView = null;
let spatialViewPromise = null;
let disposeAccountMenu = () => {};
let themeMode = normalizeThemeMode(document.documentElement.dataset.themeMode);
let resolvedTheme = resolveTheme(themeMode, systemThemeQuery.matches);


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
            selectedNodeId = nodeId;
            spatialView.setSelectedThought(selectedNodeId);
          },
          onThoughtActivate(nodeId) {
            spatialView.focusThought(nodeId);
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
  selectedNodeId = null;
  spatialView?.setSelectedThought(null);
  spatialView?.deactivate();
}


async function showGraph(account) {
  renderAccountMenu(account);
  setStatus('Loading your knowledge graph…');

  const graph = await loadGraph();
  const spatialGraph = graphToSpatialGraph(graph);

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
themeButton.addEventListener('click', () => {
  themeMode = nextThemeMode(themeMode);
  storeThemeMode();
  applyTheme();
});
systemThemeQuery.addEventListener('change', () => {
  if (themeMode === ThemeMode.SYSTEM) applyTheme();
});
window.addEventListener('beforeunload', () => spatialView?.deactivate());

applyTheme();
renderAccountMenu(null, { sessionChecking: true });
void initialize();
