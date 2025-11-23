// CardStack.tsx
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import type { MotionValue } from "motion/react";
import "./CardStack.css";
import { Folder } from "../Folders/Folder";
import type { CardProps } from "./StackingCard";
import { SCROLL_SPEED } from "./constants";

interface CardStackProps {
  children: ReactNode;
  scrollYProgress: MotionValue<number>;
}

export const CardStack = ({ children, scrollYProgress }: CardStackProps) => {
  const cards = Children.toArray(children).filter(
    isValidElement
  ) as ReactElement<CardProps>[];
  const cardCount = cards.length;

  const effectiveHeight = (cardCount * 100) / SCROLL_SPEED;

  return (
    <div
      className="card-stack-outer"
      style={{ height: `${effectiveHeight}vh` }}
    >
      <div className="card-stack-inner">
        <div className="card-stack-clip">
          {cards.map((card, index) =>
            cloneElement(card, {
              stackIndex: index,
              stackCount: cardCount,
              scrollYProgress,
            })
          )}
        </div>

        <Folder />
      </div>
    </div>
  );
};
