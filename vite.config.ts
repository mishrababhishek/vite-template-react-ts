import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@app': '/src/app',
      '@assets': '/src/assets',
      '@features': '/src/features',
      '@middlewares': '/src/middlewares',
      '@shared': '/src/shared',
    },
  },
}));
