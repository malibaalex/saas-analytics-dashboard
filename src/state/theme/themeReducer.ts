import type { Theme } from "../../types/theme";

export type ThemeAction = { type: "set"; theme: Theme } | { type: "toggle" };

const themeReducer = (state: Theme, action: ThemeAction): Theme => {
  switch (action.type) {
    case "set":
      return action.theme;
    case "toggle":
      return state === "dark" ? "light" : "dark";
  }
};

export default themeReducer;
