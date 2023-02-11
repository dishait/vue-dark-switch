<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { mountPresets } from '../composables/mount'
import { isDark, toggleDark } from '../composables/theme'
import WbSunnyOutlined from '@vicons/material/es/WbSunnyOutlined'
import DarkModeOutlined from '@vicons/material/es/DarkModeOutlined'

const props = withDefaults(
	defineProps<{
		size?: string
		unmountPersets?: boolean
	}>(),
	{
		size: '20px',
		unmountPersets: false
	}
)

if (!props.unmountPersets) {
	mountPresets()
}
</script>

<template>
	<Transition name="rotate" mode="out-in">
		<n-icon v-if="isDark" :size="size" class="cursor-pointer flex items-center" @click="toggleDark(false)">
			<slot name="dark">
				<DarkModeOutlined />
			</slot>
		</n-icon>
		<n-icon v-else :size="size" class="cursor-pointer flex items-center" @click="toggleDark(true)">
			<slot name="light">
				<WbSunnyOutlined />
			</slot>
		</n-icon>
	</Transition>
</template>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
	transition: all 0.25s ease-out;
}

.rotate-enter-from {
	opacity: 0;
	transform: rotate(270deg);
}

.rotate-leave-to {
	opacity: 0;
	transform: rotate(180deg);
}
</style>
