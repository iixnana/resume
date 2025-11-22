import { type ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme, ThemeContextProps } from "./ThemeContext.types";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    let initial: Theme = "light";

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      initial = "dark";
    }

    setTheme(initial);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
  }, [theme]);

  const contextValue: ThemeContextProps = {
    theme,
    isDark: theme === "dark",
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
