import { computed } from "vue";
import { darkTheme } from "naive-ui";
import { useDark, useToggle } from "@vueuse/core";

export const isDark = useDark();

export const toggleDark = useToggle(isDark);

export const naiveTheme = computed(() => {
  return isDark.value ? darkTheme : null;
});
