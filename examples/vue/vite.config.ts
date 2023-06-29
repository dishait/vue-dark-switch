import { Layers } from "vite-layers";

// https://github.com/markthree/vite-layers
export default Layers({
  normalize(config) {
    delete config.build;
    // @ts-ignore
    config.plugins = config.plugins.filter((p) =>
      p.name !== "vite:lib-inject-css"
    );
    return config;
  },
  extends: ["../../"],
  vite: {
    base: "/vue-dark-switch/",
  },
});
