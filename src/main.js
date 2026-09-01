import './styles.css';

import { loadGraph } from './api/graph-api.js';
import { restoreSession, signOut, startLogin } from './auth/auth-client.js';
import { graphToSpatialGraph } from './domain/spatial-adapter.js';
import { SpatialLayoutMode } from './spatial/spatial-layout-mode.js';


const loginView = document.querySelector('#login-view');
const loadingView = document.querySelector('#loading-view');
const graphView = document.querySelector('#graph-view');
const spatialWorld = document.querySelector('#spatial-world');
const accountEmail = document.querySelector('#account-email');
const signInButton = document.querySelector('#sign-in');
const signOutButton = document.querySelector('#sign-out');
const fitGraphButton = document.querySelector('#fit-graph');
const resetCameraButton = document.querySelector('#reset-camera');
const emptyState = document.querySelector('#empty-state');
const statusElement = document.querySelector('#status');

let selectedNodeId = null;
let spatialView = null;
let spatialViewPromise = null;


function setStatus(message = '') {
  statusElement.textContent = message;
}


async function ensureSpatialView() {
  if (spatialView) return spatialView;
  if (!spatialViewPromise) {
    spatialViewPromise = import('./spatial/spatial-view.js')
      .then(({ createSpatialView }) => {
        spatialView = createSpatialView({
          container: spatialWorld,
          theme: 'light',
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
  accountEmail.textContent = '';
  signOutButton.hidden = true;
  selectedNodeId = null;
  spatialView?.setSelectedThought(null);
  spatialView?.deactivate();
}


async function showGraph(account) {
  accountEmail.textContent = account.email;
  signOutButton.hidden = false;
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
signOutButton.addEventListener('click', async () => {
  await signOut();
  showSignedOut();
});
fitGraphButton.addEventListener('click', () => {
  if (!spatialView?.fitAll()) setStatus('The knowledge graph is empty.');
});
resetCameraButton.addEventListener('click', () => spatialView?.resetView());
window.addEventListener('beforeunload', () => spatialView?.deactivate());

void initialize();
