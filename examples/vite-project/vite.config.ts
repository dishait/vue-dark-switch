import Unocss from "unocss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { HtmlPolyfill } from "vue-dark-switch/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-dark-switch/",
  plugins: [vue(), HtmlPolyfill(), Unocss()],
});
