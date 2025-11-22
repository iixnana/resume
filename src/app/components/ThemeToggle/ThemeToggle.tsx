import "./ThemeToggle.css";
import { useTheme } from "../../../context/theme/ThemeContext.hook";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
};
