import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      hooks: '/src/hooks',
      utils: '/src/utils',
      features: '/src/features',
      types: '/src/types',
      data: '/src/data'
    }
  }
})
