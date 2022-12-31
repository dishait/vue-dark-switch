import { createSharedComposable } from '@vueuse/core'

function mount(
	tag: Parameters<typeof window.document.createElement>[0],
	content: string
) {
	const dom = window.document.createElement(tag)
	dom.append(content)
	window.document.head.append(dom)
}

export const mountScript = createSharedComposable(
	(content: string) => mount('script', content)
)

export const mountStyle = createSharedComposable(
	(content: string) => mount('style', content)
)

export function mountPresets() {
	mountStyle(`html {
		transition-duration: 250ms;
		transition-property: background-color;
		transition-timing-function: ease-in-out;
	}
	
	html.dark {
		color: #e5e7eb;
		background-color: #22272e;
	}`)

	mountScript(`;(function () {
					const prefersDark =
						window.matchMedia &&
						window.matchMedia('(prefers-color-scheme: dark)').matches
				const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
				if (setting === 'dark' || (prefersDark && setting !== 'light'))
				document.documentElement.classList.toggle('dark', true)
	})()`)
}
