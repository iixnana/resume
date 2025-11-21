import type { PropsWithChildren } from "react";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <h1 className="screen-reader-only">Resume of Kamile Nanartonyte</h1>
      {children}
    </main>
  );
}
