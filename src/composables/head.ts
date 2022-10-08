import { createSharedComposable } from '@vueuse/core'

export const createGlobalScript = createSharedComposable(
	(content: string) => {
		const script = window.document.createElement('script')
		script.append(content)
		window.document.head.append(script)
	}
)

export const createGlobalStyle = createSharedComposable(
	(content: string) => {
		const script = window.document.createElement('style')
		script.append(content)
		window.document.head.append(script)
	}
)
