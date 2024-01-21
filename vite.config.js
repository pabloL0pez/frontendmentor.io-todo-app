import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'contexts': path.resolve(__dirname, './src/contexts'),
      'components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()],
})
