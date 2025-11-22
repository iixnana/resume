import type { PropsWithChildren } from "react";
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";
import "./PageLayout.css";
import "../../style/background-dark.scss";
import { useTheme } from "../../context/theme/ThemeContext.hook";

export function PageLayout({ children }: PropsWithChildren) {
  const { isDark } = useTheme();

  return (
    <main>
      {isDark && (
        <div id="star-bg">
          <div className="stars-small" />
          <div className="stars-medium" />
          <div className="stars-big" />
        </div>
      )}

      <h1 className="screen-reader-only">Resume of Kamile Nanartonyte</h1>
      <ThemeToggle />
      {children}
    </main>
  );
}
