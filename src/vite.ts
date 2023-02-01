import type { Plugin } from 'vite'
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const _dirname =
	typeof __dirname !== 'undefined'
		? __dirname
		: dirname(fileURLToPath(import.meta.url))

export function HtmlPolyfill(): Plugin {
	return {
		name: 'vite-plugin-vue-dark-switch-html-polyfill',
		transformIndexHtml: {
			order: 'pre',
			async handler(html) {
				const [js, css] = await Promise.all([
					readFile(
						resolve(_dirname, './polyfill/global.js')
					),
					readFile(
						resolve(_dirname, './polyfill/global.css')
					)
				])

				html.replace(
					'</head>',
					`<style>${css}</style>
                    <script>${js}</script></head>`
				)
			}
		}
	}
}
