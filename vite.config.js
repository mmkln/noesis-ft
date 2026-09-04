import { defineConfig } from 'vite';


export default defineConfig({
  // The custom GitHub Pages domain serves this project from its root.
  base: '/',
  server: {
    host: '127.0.0.1',
    port: 5175,
    strictPort: true,
  },
});
