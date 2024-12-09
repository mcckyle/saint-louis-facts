import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures that the build files go to the 'dist' directory
  },
  base: '/saint-louis-facts/',
});
