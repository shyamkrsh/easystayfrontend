import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 server: {
  proxy: {
<<<<<<< HEAD
    '/api': 'http://localhost:8080'
  }
 },
=======
    '/api': {
      target: 'https://easystaybackend.onrender.com',
      changeOrigin: true,
      secure: false,  // Use `false` if you're testing with an HTTP server (not recommended for production)
      rewrite: (path) => path.replace(/^\/api/, '') // Rewrite `/api` to remove the prefix before forwarding
    }
  }
}

>>>>>>> d251e92d6fe0a797c4095cf72b41c2ab6f12d45f
  plugins: [react()],
})
