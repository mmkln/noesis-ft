# Noesis Frontend

Lean browser client for the Noesis logical knowledge graph.

## Run locally

Start the shared Django backend on `127.0.0.1:8001`, then run:

```powershell
npm install
npm run dev
```

Open `http://127.0.0.1:5175/`. Nodes and relations are currently managed
through the Django Admin; this frontend intentionally contains only shared
sign-in and the 3D graph view.

## GitHub Pages

Noesis is published from the generated `gh-pages` branch and uses the custom
domain `https://noesis.gomajom.com/`. The production build reads the shared API
URL from `.env.production`, while local development continues to use `.env`.

Publish the current `main` branch with:

```powershell
npm run deploy
```

For the first deployment, configure GitHub Pages to deploy from the
`gh-pages` branch at `/ (root)`. The DNS record must be a CNAME from
`noesis.gomajom.com` to `mmkln.github.io`.

The production backend must also include Noesis in its environment allow-lists:

```text
CORS_ALLOWED_ORIGINS=...,https://noesis.gomajom.com
CSRF_TRUSTED_ORIGINS=...,https://noesis.gomajom.com
SSO_ALLOWED_FRONTEND_URLS=...,https://noesis.gomajom.com/
```
