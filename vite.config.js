import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://easystaybackend.onrender.com', // Your backend URL
        changeOrigin: true,  // To avoid CORS issues
        secure: false,       // Set to false if you’re using HTTP
      }
    }
  },
  plugins: [react()],
})
