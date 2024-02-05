import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      assetsInlineLimit: 512,
    },
    plugins: [vanillaExtractPlugin()],
  },
});
