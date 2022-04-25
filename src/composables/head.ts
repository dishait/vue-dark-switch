let onceScriptFlag = false
export const createScriptOnceInHead = (content: string) => {
	if (!onceScriptFlag) {
		const script = window.document.createElement('script')
		script.append(content)
		window.document.head.append(script)
		onceScriptFlag = true
	}
}

let onceStyleFlag = false
export const createStyleOnceInHead = (content: string) => {
	if (!onceStyleFlag) {
		const script = window.document.createElement('style')
		script.append(content)
		window.document.head.append(script)
		onceStyleFlag = true
	}
}
