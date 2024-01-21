import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: 'components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: 'contexts', replacement: fileURLToPath(new URL('./src/contexts', import.meta.url)) },
      { find: 'assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
    ],
  },

  plugins: [react()],
})
