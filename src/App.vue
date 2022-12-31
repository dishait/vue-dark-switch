<script setup lang="ts">
import { NSpace } from 'naive-ui'
import Switch from './components/switch.vue'
import SwitchIcon from './components/switch-icon.vue'
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
</template>
