import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // important: makes asset paths relative
  optimizeDeps: {
    exclude: ['lucide-react'], // keep if you need it
  },
  // REMOVE build.rollupOptions.external
});
