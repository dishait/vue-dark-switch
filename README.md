<div align="center">
    <img width="100%" height="100%" src="./vue-dark-switch.gif" />
    <h1>vue-dark-switch</h1>
    <p>多合一的开箱即用 vue3 暗黑模式开关组件</p>
</div>

<br />
<br />

## 动机

暗黑模式开关是一个项目中常用的功能，为了减少后续新项目的工作量，所以封装了这个组件。

<br />
<br />

## 特性

- 美观的
- 开箱即用的
- 支持手动操作
- `naive-ui` 支持

<br />
<br />

## 使用

### 安装

```shell
npm i vue-dark-switch -D
```

<br />

### 基础

```html
<script>
	import { Switch } from 'vue-dark-switch'
</script>

<template>
	<Switch />
</template>
```

#### 纯图标

```html
<script>
	import { SwitchIcon } from 'vue-dark-switch'
	import 'vue-dark-switch/dist/style.css'
</script>

<template>
	<SwitchIcon />
</template>
```

<br />

### 手动

```ts
import { isDark, toggleDark } from 'vue-dark-switch'

isDark.value // 是否是暗黑模式

toggleDark(false) // 取消暗黑模式

toggleDark(true) // 开启暗黑模式

toggleDark() // 切换模式
```

<br />

### `naive-ui` 支持

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

## 编译时预设 - 推荐

避免复杂场景下首次启动白屏，性能更好

```html
<script>
	import { Switch } from 'vue-dark-switch'
</script>

<template>
	<!-- unmount-persets 关闭运行时预设 -->
	<Switch :unmount-persets="true" />
</template>
```

```ts
// vite.config.js
import { defineConfig } from 'vite'
import { HtmlPolyfill } from 'vue-dark-switch/vite'

export default defineConfig({
	plugins: [
		HtmlPolyfill() // 注入编译时预设
	]
})
```

<br />
<br />

# 扩展 -自定义

- 支持自定义switch切换图标插槽

  ```html
  <script>
  	import { Switch } from 'vue-dark-switch'
      import WorkspacePremiumOutlined from '@vicons/material/es/WorkspacePremiumOutlined'
      import WorkspacePremiumTwotone from '@vicons/material/es/WorkspacePremiumTwotone'
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

- 支持自定义switch背景

  ```html
  <template>
  <Switch darkBackground="#fff" lightBackground="#2D2D2D"/>
  </template>
  ```

- 自定义`SwitchIcon`图标

  ```html
  <script>
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
<br />

# Refs

该组件由以下库搭建而成

- [vite](https://cn.vitejs.dev/)
- [naive-ui](https://www.naiveui.com/zh-CN)
- [vueuse](https://vueuse.org/)
- [unocss](https://github.com/unocss/unocss)

<br />
<br />

# Support

该组件由 [vue3-exports](https://github.com/dishait/vue3-exports) 提供支持

<br />
<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).
