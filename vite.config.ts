import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Allows access from LAN devices like mobile
    port: 3004,      // Or any port you prefer, like 8080, 5174, etc.
  },
  // Use relative paths for GitHub Pages
  base: './',
});
