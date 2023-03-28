import { Layers } from "vite-layers";
import { HtmlPolyfill } from "vue-dark-switch/vite";

// https://github.com/markthree/vite-layers
export default Layers({
  normalize(config) {
    delete config.build;
    return config;
  },
  extends: ["../../"],
  vite: {
    base: "/vue-dark-switch/",
    plugins: [HtmlPolyfill()],
  },
});
