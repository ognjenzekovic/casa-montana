import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built asset paths (./assets/...) resolve
  // correctly whether the site is served from the domain root
  // (casamontana.rs/) or a subpath (e.g. a GitHub Pages fallback URL
  // like <user>.github.io/casa-montana/) — no per-target build needed.
  base: './',
  plugins: [react()],
})
