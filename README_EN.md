<div align="center">
    <img width="100%" height="100%" src="./vue-dark-switch.gif" />
    <h1>vue-dark-switch</h1>
    <p>A versatile vue3 dark mode switch component</p>
</div>

<br />
<br />

## README 🦉

English | [Chinese](./README.md)

<br />
<br />

## Motivation

Dark mode switch is a commonly used feature in projects. To reduce the workload
for future projects, this component is encapsulated.

<br />
<br />

## Features

- Beautiful
- Ready to use
- Supports manual operation
- naive-ui support

<br />
<br />

## Usage

### Installation

```shell
npm i vue-dark-switch
```

<br />

### Basic

```html
<script setup>
import { Switch } from 'vue-dark-switch'
</script>

<template>
	<Switch />
</template>
```

Customize `Switch` background color

```html
<template>
	<Switch darkBackground="#fff" lightBackground="#2D2D2D"/>
</template>
```

```html
<script setup>
import { Switch } from 'vue-dark-switch'
import WorkspacePremiumTwotone from '@vicons/material/es/WorkspacePremiumTwotone'
import WorkspacePremiumOutlined from '@vicons/material/es/WorkspacePremiumOutlined'
</script>

<template>
	<Switch>
		<template #dark>
			<WorkspacePremiumOutlined />
		</template>
		<template #light>
			<WorkspacePremiumTwotone />
		</template>
	</Switch>
</template>
```

### Icon-only

```html
<script setup>
	import { SwitchIcon } from 'vue-dark-switch'
	import 'vue-dark-switch/dist/style.css'
</script>

<template>
	<SwitchIcon />
</template>
```

### Customize icon

```html
<script setup>
import { SwitchIcon } from 'vue-dark-switch'
import 'vue-dark-switch/dist/style.css'
import WorkspacePremiumOutlined from '@vicons/material/es/WorkspacePremiumOutlined'
import WorkspacePremiumTwotone from '@vicons/material/es/WorkspacePremiumTwotone'
</script>

<template>
	<SwitchIcon>
		<template #dark>
			<WorkspacePremiumOutlined />
		</template>
		<template #light>
			<WorkspacePremiumTwotone />
		</template>
	</SwitchIcon>
</template>
```

<br />

## Manual

```ts
import { isDark, toggleDark } from "vue-dark-switch";

isDark.value; // Whether in dark mode

toggleDark(false); // Turn off dark mode

toggleDark(true); // Turn on dark mode

toggleDark(); // Switch mode
```

<br />

## `naive-ui` support

```html
<!-- App.vue -->
<script setup>
import { NConfigProvider } from 'naive-ui'

import { naiveTheme } from 'vue-dark-switch'
</script>

<template>
	<n-config-provider :theme="naiveTheme">
		<router-view />
	</n-config-provider>
</template>
```

<br />

## Build-time preset - Recommended

Avoid white screen at startup in complex scenarios and improve performance

```html
<script setup>
import { Switch } from 'vue-dark-switch'
</script>

<template>
	<!-- unmount-persets to turn off runtime preset -->
	<Switch :unmount-persets="true" />
</template>
```

```ts
// vite.config.js
import { defineConfig } from "vite";
import { HtmlPolyfill } from "vue-dark-switch/vite";

export default defineConfig({
  plugins: [
    HtmlPolyfill(), // Inject build-time preset
  ],
});
```

# Refs

This component is built using the following libraries:

- [vite](https://cn.vitejs.dev/)
- [naive-ui](https://www.naiveui.com/zh-CN)
- [vueuse](https://vueuse.org/)
- [unocss](https://github.com/unocss/unocss)

<br />
<br />

# Support

This component is supported by
[vue3-exports](https://github.com/dishait/vue3-exports) and
[vite-layers](https://github.com/markthree/vite-layers).

<br />
<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).
