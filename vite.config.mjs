import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/full-stack-portfolio/', // здесь слеши верные (но комментарий лучше поправить)
  plugins: [react()],
})
