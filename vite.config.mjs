import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/full-stack-portfolio/', 
  build: {
    outDir: 'docs', 
  },
  plugins: [react()],
})
