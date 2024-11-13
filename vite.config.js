import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 server: {
  proxy: {
    '/api': {
      target: 'https://easystaybackend.onrender.com',
      changeOrigin: true,
      secure: false,  // Use `false` if you're testing with an HTTP server (not recommended for production)
      rewrite: (path) => path.replace(/^\/api/, '') // Rewrite `/api` to remove the prefix before forwarding
    }
  }
},
  plugins: [react()],
})
