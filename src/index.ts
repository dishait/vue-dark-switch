import App from "./App.vue";
import { createApp } from "vue";

import "uno.css";
import "./polyfill/global.css"; // default global css
import "./polyfill/global.js"; // Must-have for vueuse

const app = createApp(App);

app.mount("#app");
