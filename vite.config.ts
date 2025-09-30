import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio3/',
  plugins: [react()],
  server: {
    allowedHosts: ['.ngrok-free.app', '.railway.app'],
  },
})
