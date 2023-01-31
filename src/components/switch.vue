<script setup lang="ts">
import { NSwitch, NIcon } from 'naive-ui'
import { isDark } from '../composables/theme'
import { mountPresets } from '../composables/mount'
import WbSunnyOutlined from '@vicons/material/es/WbSunnyOutlined'
import DarkModeOutlined from '@vicons/material/es/DarkModeOutlined'

const props = withDefaults(
	defineProps<{
		round?: boolean
		unmountPersets?: boolean
	}>(),
	{
		round: false,
		unmountPersets: false
	}
)

if (!props.unmountPersets) {
	mountPresets()
}

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
		v-model:value="isDark">
		<template #checked-icon>
			<n-icon>
				<DarkModeOutlined />
			</n-icon>
		</template>
		<template #unchecked-icon>
			<n-icon>
				<WbSunnyOutlined />
			</n-icon>
		</template>
	</n-switch>
</template>
