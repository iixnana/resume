// hooks/useViewportCategory.ts
import { useEffect, useState } from "react";

export type ViewportCategory = "phone" | "tablet" | "laptop" | "big";

const getCategory = (width: number): ViewportCategory => {
  if (width < 640) return "phone";
  if (width < 1024) return "tablet";
  if (width < 1440) return "laptop";
  return "big";
};

export const useViewportSize = (): ViewportCategory => {
  const [category, setCategory] = useState<ViewportCategory>(() => {
    if (typeof window === "undefined") return "laptop"; // SSR-safe default
    return getCategory(window.innerWidth);
  });

  useEffect(() => {
    const handleResize = () => {
      setCategory(getCategory(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return category;
};
