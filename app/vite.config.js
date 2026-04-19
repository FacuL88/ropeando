import { defineConfig } from 'vite'

export default defineConfig({
  base: '/appRopeando/', // 👈 poné el nombre de tu repo acá, CON SLASHES
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