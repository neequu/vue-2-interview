// vite.config.js
import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'

// ts-ignore
export default defineConfig({
  publicPath: '/vue-2-interview/',
  plugins: [vue()],
})