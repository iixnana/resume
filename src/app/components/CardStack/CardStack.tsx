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

interface CardStackProps {
  children: ReactNode;
  scrollYProgress: MotionValue<number>;
}

export const CardStack = ({ children, scrollYProgress }: CardStackProps) => {
  const cards = Children.toArray(children).filter(
    isValidElement
  ) as ReactElement<CardProps>[];
  const cardCount = cards.length;

  return (
    <div
      className="card-stack-outer"
      style={{ height: `${cardCount * 100}vh` }}
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
