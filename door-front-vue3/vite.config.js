import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  plugins: [vue(), compression()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/app/',
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              !["@cool-vue/crud", "@cool-vue/admin"].find((e) => id.includes(e))
            ) {
              let str = id.toString().split("node_modules/")[1];

              if (str[0] == "@") {
                str = str.replace("/", ".");
              }

              return str.split("/")[0].toString();
            }
          }
        }
      }
    }
  }
})
