import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    target: 'es2022',
  },
  build: {
    target: 'es2022',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})