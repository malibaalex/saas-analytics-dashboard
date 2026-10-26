import { useTheme } from "../../context";
import { icons } from "../../lib/data/landing";
import Button from "./Button";
import Icon from "./Icon";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Button
      variant="secondary"
      size="icon"
      className="bg-card"
      aria-label={isDark ? "Swicth to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
    >
      <Icon paths={isDark ? icons.sun : icons.moon} className="size-4" />
    </Button>
  );
};

export default ThemeToggle;
