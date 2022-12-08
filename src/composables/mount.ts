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
