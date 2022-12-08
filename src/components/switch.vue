<script setup lang="ts">
import { NSwitch, NIcon } from 'naive-ui'
import { isDark } from '../composables/theme'

import {
	mountStyle,
	mountScript
} from '../composables/mount'

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

defineProps({
	round: {
		type: Boolean,
		default: false
	}
})

const railStyle = ({ checked }) => {
	return {
		background: checked
			? 'linear-gradient(135deg,#42e695,#3bb2b8)'
			: ''
	}
}
</script>

<template>
	<n-switch
		:round="round"
		:rail-style="railStyle"
		v-model:value="isDark"
	>
		<template #checked-icon>
			<n-icon>
				<div
					class="i-line-md:sunny-outline-to-moon-transition"
				/>
			</n-icon>
		</template>
		<template #unchecked-icon>
			<n-icon>
				<div class="i-line-md:sunny-outline" />
			</n-icon>
		</template>
	</n-switch>
</template>
