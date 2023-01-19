<script setup lang="ts">
import { SwitchIcon, Switch } from 'vue-dark-switch'
import 'vue-dark-switch/dist/style.css'
</script>

<template>
	<Switch class="mr-3" />
	<SwitchIcon />
</template>

<style>
.mr-3 {
	margin-right: 0.75rem;
}

#app {
	height: 20vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
