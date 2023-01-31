import Unocss from 'unocss/vite'
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
		}
	},
	plugins: [
		Vue(),
		Unocss(),
		{
			name: 'copy-polyfill',
			apply: 'build',
			async buildEnd() {
				const { default: cpy } = await import('cpy')
				cpy('src/polyfill/**/*', 'dist/polyfill')
			}
		}
	]
})
