import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'


// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // 将 @ 指向 src 目录
            'components': path.resolve(__dirname, './src/components'), // 示例：指向 components 目录
        },
    },
})
