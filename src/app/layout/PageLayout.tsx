import type { PropsWithChildren } from "react";
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";
import { useTheme } from "../../context/theme/ThemeContext.hook";
import "./PageLayout.css";
import "../../style/background-dark.scss";
import "../../style/background-light.scss";

export function PageLayout({ children }: PropsWithChildren) {
  const { isDark } = useTheme();

  return (
    <main>
      {isDark ? (
        <div id="star-bg">
          <div className="stars-small" />
          <div className="stars-medium" />
          <div className="stars-big" />
        </div>
      ) : (
        <div id="comet-bg">
          <div className="comets-small"></div>
          <div className="comets-medium"></div>
          <div className="comets-big"></div>
        </div>
      )}

      <h1 className="screen-reader-only">Resume of Kamile Nanartonyte</h1>
      <ThemeToggle />
      {children}
    </main>
  );
}
