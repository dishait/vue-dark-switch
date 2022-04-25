<script setup lang="ts">
import { NSwitch, NIcon } from 'naive-ui'
import { isDark } from '../composables/theme'
import {
	WbSunnyOutlined,
	DarkModeOutlined
} from '@vicons/material'

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
			<n-icon :component="DarkModeOutlined" />
		</template>
		<template #unchecked-icon>
			<n-icon :component="WbSunnyOutlined" />
		</template>
	</n-switch>
</template>
