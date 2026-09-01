import {
  buildBearerHeaders,
  parseIdentityResponse,
  parseRefreshResponse,
  parseSsoFragment,
  parseTokenSession,
} from './session-parsers.js';


const API_URL = import.meta.env.VITE_API_URL;
const REFRESH_TOKEN_KEY = 'noesis:refresh-token:v1';

let account = null;
let accessToken = null;
let refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
let refreshPromise = null;


function apiErrorMessage(payload, fallback) {
  if (typeof payload?.detail === 'string' && payload.detail) {
    return payload.detail;
  }
  return fallback;
}


function storeRefreshToken(value) {
  refreshToken = value;

  if (value) localStorage.setItem(REFRESH_TOKEN_KEY, value);
  else localStorage.removeItem(REFRESH_TOKEN_KEY);
}


function clearSsoFragment() {
  window.history.replaceState(
    null,
    document.title,
    `${window.location.pathname}${window.location.search}`,
  );
}


function applyTokenSession(payload) {
  const session = parseTokenSession(payload);
  if (!session) {
    throw new Error('The server returned an invalid sign-in response.');
  }

  account = session.account;
  accessToken = session.accessToken;
  storeRefreshToken(session.refreshToken);
}


async function exchangeSsoCallback() {
  const { code, error } = parseSsoFragment(window.location.hash);
  if (!code && !error) return false;

  clearSsoFragment();
  if (error) {
    throw new Error(
      error === 'access_denied'
        ? 'Sign in was cancelled.'
        : 'Sign in could not be completed.',
    );
  }

  const response = await fetch(`${API_URL}/auth/sso/exchange/`, {
    method: 'POST',
    headers: buildBearerHeaders({ hasBody: true }),
    body: JSON.stringify({ code }),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(apiErrorMessage(payload, 'Sign in failed.'));
  }

  applyTokenSession(payload);
  return true;
}


async function refreshAccessToken() {
  if (!refreshToken) throw new Error('Authentication required.');
  if (refreshPromise) return refreshPromise;

  const tokenToRefresh = refreshToken;
  refreshPromise = (async () => {
    const response = await fetch(`${API_URL}/auth/token/refresh/`, {
      method: 'POST',
      headers: buildBearerHeaders({ hasBody: true }),
      body: JSON.stringify({ refresh: tokenToRefresh }),
    });
    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(apiErrorMessage(payload, 'Session refresh failed.'));
    }

    const refreshed = parseRefreshResponse(payload);
    if (!refreshed) {
      throw new Error('The server returned an invalid refresh response.');
    }

    accessToken = refreshed.accessToken;
    if (refreshed.refreshToken) storeRefreshToken(refreshed.refreshToken);
    return accessToken;
  })();

  try {
    return await refreshPromise;
  } finally {
    refreshPromise = null;
  }
}


async function loadIdentity() {
  const response = await fetch(`${API_URL}/auth/sso/me/`, {
    headers: buildBearerHeaders({ accessToken }),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(apiErrorMessage(payload, 'Could not load account.'));
  }

  account = parseIdentityResponse(payload);
  if (!account) throw new Error('The server returned an invalid account.');
  return account;
}


export function clearSession() {
  account = null;
  accessToken = null;
  storeRefreshToken(null);
}


export async function restoreSession() {
  try {
    const completedLogin = await exchangeSsoCallback();
    if (!completedLogin) {
      if (!refreshToken) return null;
      await refreshAccessToken();
      await loadIdentity();
    }
    return account;
  } catch (error) {
    clearSession();
    throw error;
  }
}


export function startLogin({ switchAccount = false } = {}) {
  const returnTo = `${window.location.origin}/`;
  const parameters = new URLSearchParams({ return_to: returnTo });
  if (switchAccount) parameters.set('switch', '1');

  window.location.assign(
    `${API_URL}/auth/sso/login/?${parameters.toString()}`,
  );
}


export async function requestApi(path) {
  const performRequest = () => fetch(`${API_URL}${path}`, {
    headers: buildBearerHeaders({ accessToken }),
  });

  let response = await performRequest();
  if (response.status === 401 && refreshToken) {
    try {
      await refreshAccessToken();
      response = await performRequest();
    } catch (error) {
      clearSession();
      throw error;
    }
  }

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    if (response.status === 401) clearSession();
    throw new Error(
      apiErrorMessage(payload, `Request failed with status ${response.status}.`),
    );
  }
  return payload;
}


export async function signOut() {
  const tokenToRevoke = refreshToken;
  try {
    if (tokenToRevoke) {
      await fetch(`${API_URL}/auth/token/blacklist/`, {
        method: 'POST',
        headers: buildBearerHeaders({ hasBody: true }),
        body: JSON.stringify({ refresh: tokenToRevoke }),
      });
    }
  } finally {
    clearSession();
  }
}
