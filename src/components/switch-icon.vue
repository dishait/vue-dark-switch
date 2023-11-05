<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { isDark, toggleDark } from '../composables/theme'
import WbSunnyOutlined from '@vicons/material/es/WbSunnyOutlined'
import DarkModeOutlined from '@vicons/material/es/DarkModeOutlined'

withDefaults(
	defineProps<{ size?: string }>(),
	{ size: '20px' }
)
</script>

<template>
	<Transition name="rotate" mode="out-in">
		<NIcon v-if="isDark" :size="size" class="cursor-pointer flex items-center" @click="toggleDark(false)">
			<slot name="dark">
				<DarkModeOutlined />
			</slot>
		</NIcon>
		<NIcon v-else :size="size" class="cursor-pointer flex items-center" @click="toggleDark(true)">
			<slot name="light">
				<WbSunnyOutlined />
			</slot>
		</NIcon>
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
