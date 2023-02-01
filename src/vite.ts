import type { Plugin } from 'vite'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export function HtmlPolyfill(): Plugin {
	return {
		name: 'vite-plugin-vue-dark-switch-html-polyfill',
		transformIndexHtml: {
			order: 'pre',
			async handler(html) {
				const [js, css] = await Promise.all([
					readFile(
						resolve(__dirname, './polyfill/global.js')
					),
					readFile(
						resolve(__dirname, './polyfill/global.css')
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
