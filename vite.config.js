//File name: vite.config.js
//Author: Kyle McColgan
//Date: 17 June 2026
//Description: This file contains the Vite configuration for the Saint Louis Facts React project.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures that the build files go to the 'dist' directory
  },
  base: '/saint-louis-facts/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
  },
});
