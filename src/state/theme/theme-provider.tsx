import type { ReactNode } from "react";
import { ThemeContext } from "./theme-context";
import useThemeState from "./use-theme-state";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const value = useThemeState();
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
