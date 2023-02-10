<script setup lang="ts">
import { NSpace } from 'naive-ui'
import Switch from './components/switch.vue'
import SwitchIcon from './components/switch-icon.vue'
import WorkspacePremiumOutlined from '@vicons/material/es/WorkspacePremiumOutlined'
import WorkspacePremiumTwotone from '@vicons/material/es/WorkspacePremiumTwotone'
</script>

<template>
	<div class="w-screen h-20vh">
		<n-space
			align="center"
			size="large"
			justify="center"
			class="mt-20">
			<Switch />
			<SwitchIcon />
		</n-space>
	</div>
		<div class="w-screen h-20vh">
			<n-space align="center" size="large" justify="center" class="mt-20">
				<Switch darkBackground="#fff" lightBackground="#2D2D2D">
					<template #dark>
						<WorkspacePremiumOutlined />
					</template>
					<template #light>
						<WorkspacePremiumTwotone />
					</template>
				</Switch>
				<SwitchIcon>
					<template #dark>
						<WorkspacePremiumOutlined />
					</template>
					<template #light>
						<WorkspacePremiumTwotone />
					</template>
				</SwitchIcon>
			</n-space>
		</div>
</template>
