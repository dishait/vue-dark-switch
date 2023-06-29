<script setup lang="ts">
import { Switch, SwitchIcon } from "vue-dark-switch"
</script>

<template>
    <div class="flex justify-center h-20vh items-center space-x-5">
        <ClientOnly>
            <Switch />
            <SwitchIcon />
        </ClientOnly>
    </div>
</template>