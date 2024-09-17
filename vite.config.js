import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'node:path'


// https://vitejs.dev/config/
export default defineConfig({
  base:'/chatbot',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:5000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace('/api', '')
    //   },
    //   '/admin': {
    //     target: 'http://127.0.0.1:8080',
    //     changeOrigin: true
    //  }
    //}
  }
})
