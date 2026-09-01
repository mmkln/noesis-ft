import { requestApi } from '../auth/auth-client.js';


export function loadGraph() {
  return requestApi('/noesis/graph/');
}
