import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 44405,
        strictPort: true,
        https: false,
        host: "127.0.0.1",
        proxy: {
            '/api': {
                target: 'https://localhost:7016',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, '/api')
            },
        } 
    },

})
