import Unocss from 'unocss/vite'
import Dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
	build: {
		lib: {
			name: 'vue-dark-switch',
			entry: './src/exports.ts',
			fileName: f => `index.${f}.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	plugins: [Vue(), Unocss(), Dts()]
})
