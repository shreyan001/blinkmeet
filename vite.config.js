import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
     proxy:{
      '/api' : 'https://spacemeet-api.onrender.com/'
     }
  },
  optimizeDeps: {
    include: ["@vite-mono/lib-cjs"],
  },
  build: {
    commonjsOptions: {
      include: [/lib-cjs/, /node_modules/],
    },
  },
  define: {
    'process.env': {}
  },
  plugins: [react()]
})



