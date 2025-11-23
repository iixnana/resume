import { useTheme } from "../../../context/theme/ThemeContext.hook";
import { FloatingButton } from "../FloatingButton/FloatingButton";
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <FloatingButton
      className="theme-toggle"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      {isDark ? "🌞" : "🌙"}
    </FloatingButton>
  );
};
