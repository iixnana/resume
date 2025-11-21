import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const DARK = "dark";
const LIGHT = "light";
const STORAGE_KEY = "theme";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(LIGHT);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem(STORAGE_KEY);

    let initial = LIGHT;

    if (saved === DARK || saved === LIGHT) {
      initial = saved;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      initial = DARK;
    }

    setTheme(initial);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    const isDark = theme === DARK;

    root.classList.toggle(DARK, isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? DARK : LIGHT);
  }, [theme]);

  const isDark = theme === DARK;

  const handleClick = () => {
    setTheme((prev) => (prev === DARK ? LIGHT : DARK));
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle dark mode"
      onClick={handleClick}
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
};
