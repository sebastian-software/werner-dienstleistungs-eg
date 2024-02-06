import { defineConfig } from "astro/config"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import vercel from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  vite: {
    build: {
      assetsInlineLimit: 512
    },
    plugins: [vanillaExtractPlugin()]
  }
})
