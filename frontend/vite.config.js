import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables so we can optionally use VITE_BACKEND_URL for dev proxy
  const env = loadEnv(mode, process.cwd(), '');
  const target = (env.VITE_BACKEND_URL && env.VITE_BACKEND_URL.trim()) || 'http://localhost:4000';

  return {
    plugins: [react()],
    server: {
      port: 5173,
      open: true,
      proxy: {
        '/api': {
          target,
          changeOrigin: true,
        },
      },
    },
  };
});
