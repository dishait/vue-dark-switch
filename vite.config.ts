import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { builtinModules } from 'node:module'

export default defineConfig({
	build: {
		emptyOutDir: false,
		lib: {
			name: 'vue-dark-switch',
			formats: ['cjs', 'es'],
			fileName(f, e) {
				const ext = f === 'es' ? 'mjs' : f
				return `${e}.${ext}`
			},
			entry: ['./src/exports.ts', './src/vite.ts']
		},
		rollupOptions: {
			external: [
				'vue',
				...builtinModules,
				...builtinModules.map(m => `node:${m}`)
			]
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
