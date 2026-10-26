import type { Theme } from "../../types/theme";

const STORAGE_KEY = "app-theme";

export const getInitialTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored == "dark") return stored;
  } catch {
    /* storage unavailable */
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const applyTheme = (theme: Theme, root: HTMLElement = document.documentElement): void => {
  root.classList.toggle("dark", theme === "dark");
};

export const persistTheme = (theme: Theme): void => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
};
