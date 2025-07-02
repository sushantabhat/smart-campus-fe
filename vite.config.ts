import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  // Load app-level env vars
  const env = loadEnv(mode, '.', '');

  return defineConfig({
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    // Environment variables are now available in env object
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  });
};