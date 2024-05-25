import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8001', // Backend-servern
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Ta bort '/api' prefixet om nödvändigt
      }
    }
  }
});
