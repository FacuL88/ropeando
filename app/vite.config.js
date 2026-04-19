import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: true,
  },
})