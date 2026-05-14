import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base works on GitHub Pages (user/repo) and locally
export default defineConfig({
  plugins: [react()],
  base: './',
})
