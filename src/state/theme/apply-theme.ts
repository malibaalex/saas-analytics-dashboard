import type { Theme } from "../../types/theme";

const applyTheme = (theme: Theme, root: HTMLElement = document.documentElement): void => {
  root.classList.toggle("dark", theme === "dark");
};

export default applyTheme;
