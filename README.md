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
