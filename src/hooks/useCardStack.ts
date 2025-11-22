import { useEffect, useState } from "react";

export function useCardStack(
  containerRef: React.RefObject<HTMLDivElement | null>
) {
  const [activeIndexes, setActiveIndexes] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    console.log("containerRef.current:", container);

    // Fallback: if container is null, query from document
    const root: ParentNode = container ?? document;

    const cards = Array.from(
      root.querySelectorAll<HTMLDivElement>(".stack-card")
    );

    console.log("cards found:", cards.length);
    if (cards.length === 0) return;

    let lastScrollTop = 0;

    const onScroll = () => {
      const containerRect = container
        ? container.getBoundingClientRect()
        : cards[0].getBoundingClientRect(); // fallback rect

      const windowHeight = window.innerHeight + 300;
      const scrollPosition = window.scrollY;
      const scrollDown = scrollPosition > lastScrollTop;
      lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;

      const progress = Math.max(
        0,
        (scrollPosition - containerRect.top + windowHeight) / (windowHeight * 2)
      );

      const numCards = cards.length;
      const next = new Set<number>();

      for (let index = numCards - 1; index >= 0; index--) {
        if (index === numCards - 1) {
          if (scrollPosition > containerRect.top - windowHeight * 0.2) {
            next.add(index);
          }
          continue;
        }

        if (scrollDown) {
          if (index >= numCards - progress && index !== numCards - 1) {
            next.add(index);
          }
        } else {
          if (index > numCards - progress - 1 && index !== numCards - 1) {
            next.add(index);
          }
        }
      }

      setActiveIndexes(next);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial call

    return () => window.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  return activeIndexes;
}
