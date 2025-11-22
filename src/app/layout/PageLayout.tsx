import type { PropsWithChildren } from "react";
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";
import "./PageLayout.css";
import "../../style/background.scss";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <div id="star-bg">
        <div className="stars-small" />
        <div className="stars-medium" />
        <div className="stars-big" />
      </div>
      <h1 className="screen-reader-only">Resume of Kamile Nanartonyte</h1>
      <ThemeToggle />
      {children}
    </main>
  );
}
