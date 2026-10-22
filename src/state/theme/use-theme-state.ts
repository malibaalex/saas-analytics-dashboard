import { useCallback, useEffect, useMemo, useReducer } from "react";
import type { Theme } from "../../types/theme";
import type { ThemeContextValue } from "./theme-context";
import themeReducer from "./themeReducer";
import applyTheme from "./apply-theme";

const STORAGE_KEY = "orbix-theme";

const getInitialTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const useThemeState = (): ThemeContextValue => {
  const [theme, dispatch] = useReducer(themeReducer, undefined, getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const setTheme = useCallback((next: Theme) => dispatch({ type: "set", theme: next }), []);
  const toggleTheme = useCallback(() => dispatch({ type: "toggle" }), []);

  return useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);
};

export default useThemeState;
