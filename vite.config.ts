import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // listen on all interfaces so LAN devices can reach it
    port: 5173,
    strictPort: true,
    cors: true
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true
  }
})
