// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mcp from "astro-mcp";

import tailwindcss from "@tailwindcss/vite";

// Modern Astro configuration following 2024/2025 best practices
// https://astro.build/config
export default defineConfig({
  site: "https://siligong-gamedev.com", // Required for social media URLs
  integrations: [react(), mcp()],
  output: "static", // Static generation by default (islands architecture)
  build: {
    assets: "assets",
    inlineStylesheets: "auto", // Optimize CSS delivery
  },
  compressHTML: true, // Modern optimization
  devToolbar: {
    enabled: true, // Enable accessibility checks via Dev Toolbar
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
