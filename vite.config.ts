// vite.config.js
import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'
import {BASE} from './src/utils/constants'

export default defineConfig({
  base: BASE,
  plugins: [vue()],
})