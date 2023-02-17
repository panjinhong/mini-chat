import { ref } from "vue";
import type { Ref } from "vue";

type Theme = "light" | "dark";

export function useTheme() {
  const currentTheme = ref<Theme>("light");

  const setCurrentTheme = (theme?: Theme) => {
    if (theme) {
      currentTheme.value = theme;
    } else {
      currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
    }
    document.documentElement.setAttribute("theme", currentTheme.value);
  };

  return [currentTheme, setCurrentTheme] as [
    Ref<Theme>,
    (theme?: Theme) => void
  ];
}
