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
      '@assets': '/src/assets',
      '@shared': '/src/shared',
    },
  },
}));
