import Unocss from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
	build: {
		emptyOutDir: false,
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
		},
		cssCodeSplit: true
	},
	plugins: [
		Vue(),
		Unocss({
			presets: [presetUno(), presetIcons()]
		})
	]
})
