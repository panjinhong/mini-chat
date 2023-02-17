import { ref } from "vue";
import type { Ref } from "vue";

type Theme = "light" | "dark";

export function useTheme() {
  const currentTheme = ref<Theme>("light");

  const setCurrentTheme = (theme?: Theme) => {
    if (theme) {
      currentTheme.value = theme;
      return;
    }
    currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
  };

  return [currentTheme, setCurrentTheme] as [
    Ref<Theme>,
    (theme?: Theme) => void
  ];
}
