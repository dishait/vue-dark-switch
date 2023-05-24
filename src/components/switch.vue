<script setup lang="ts">
import { NSwitch, NIcon } from 'naive-ui'
import { isDark } from '../composables/theme'
import WbSunnyOutlined from '@vicons/material/es/WbSunnyOutlined'
import DarkModeOutlined from '@vicons/material/es/DarkModeOutlined'

const props = withDefaults(
	defineProps<{
		round?: boolean
		darkBackground?: string
		lightBackground?: string
	}>(),
	{
		round: false,
		darkBackground: 'linear-gradient(135deg,#42e695,#3bb2b8)',
		lightBackground: ''
	}
)


const railStyle = ({ checked }) => {
	return {
		background: checked
			? props.darkBackground
			: props.lightBackground
	}
}
</script>

<template>
	<NSwitch :round="round" :rail-style="railStyle" v-model:value="isDark">
		<template #checked-icon>
			<NIcon>
				<slot name="dark">
					<DarkModeOutlined />
				</slot>
			</NIcon>
		</template>
		<template #unchecked-icon>
			<NIcon>
				<slot name="light">
					<WbSunnyOutlined />
				</slot>
			</NIcon>
		</template>
	</NSwitch>
</template>
