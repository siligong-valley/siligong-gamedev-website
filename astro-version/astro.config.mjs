// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// Modern Astro configuration following 2024/2025 best practices
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
  ],
  output: 'static', // Static generation by default (islands architecture)
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto', // Optimize CSS delivery
  },
  compressHTML: true, // Modern optimization
  devToolbar: {
    enabled: true // Enable accessibility checks via Dev Toolbar
  },
  vite: {
    resolve: {
      alias: {
        '@': './src',
        'figma:asset': './src/assets/figma'
      }
    },

    plugins: [tailwindcss()]
  }
});