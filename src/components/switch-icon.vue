<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { isDark, toggleDark } from '../composables/theme'
import { mountPresets } from '../composables/mount'
import WbSunnyOutlined from '@vicons/material/es/WbSunnyOutlined'
import DarkModeOutlined from '@vicons/material/es/DarkModeOutlined'

mountPresets()

withDefaults(defineProps<{ size?: string }>(), {
	size: '20px'
})
</script>

<template>
	<Transition name="rotate" mode="out-in">
		<n-icon
			v-if="isDark"
			:size="size"
			class="cursor-pointer flex items-center"
			@click="toggleDark(false)">
			<DarkModeOutlined />
		</n-icon>
		<n-icon
			v-else
			:size="size"
			class="cursor-pointer flex items-center"
			@click="toggleDark(true)">
			<WbSunnyOutlined />
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
