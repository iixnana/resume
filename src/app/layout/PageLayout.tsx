import type { PropsWithChildren } from "react";
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";
import "./PageLayout.css";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <h1 className="screen-reader-only">Resume of Kamile Nanartonyte</h1>
      <ThemeToggle />
      {children}
    </main>
  );
}
