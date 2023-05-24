import "uno.css";
import './polyfill/global.css' // default global css
import './polyfill/global.js' // Must-have for vueuse

export { default as Switch } from "./components/switch.vue";
export { default as SwitchIcon } from "./components/switch-icon.vue";

export { isDark, naiveTheme, toggleDark } from "./composables/theme";
