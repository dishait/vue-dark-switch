import Unocss from "unocss/vite";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { builtinModules } from "node:module";

const warmup = import("vite-plugin-warmup").then((m) =>
  m.warmup({
    clientFiles: ["./src/**/*"],
  })
);

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      name: "vue-dark-switch",
      formats: ["cjs", "es"],
      fileName(f, e) {
        const ext = f === "es" ? "mjs" : f;
        return `${e}.${ext}`;
      },
      entry: ["./src/exports.ts"],
    },
    rollupOptions: {
      external: [
        "vue",
        ...builtinModules,
        ...builtinModules.map((m) => `node:${m}`),
      ],
    },
  },
  plugins: [
    warmup,
    Vue(),
    Unocss(),
    libInjectCss(),
  ],
});
