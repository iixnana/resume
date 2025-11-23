import type { ComponentPropsWithoutRef, ReactNode } from "react";
import "./StackingCard.css";
import { motion, useTransform, type MotionValue } from "motion/react";
import { CONTENT_FILTER_END, CONTENT_FILTER_START } from "./constants";
import { useViewportSize } from "../../../hooks/useViewportSize";
import { classNames } from "../../../utils/classnames";

interface StackingCardProps {
  stackIndex?: number; // internal, injected by CardStack
  stackCount?: number; // internal, injected by CardStack
  scrollYProgress?: MotionValue<number>; // internal, injected by CardStack
}

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

export type CardProps = MotionDivProps &
  StackingCardProps & {
    children: ReactNode;
    className?: string;
  };

export const StackingCard = ({
  children,
  className,
  stackIndex,
  stackCount,
  scrollYProgress,
  ...props
}: CardProps) => {
  const viewport = useViewportSize();

  const hasStackProps =
    scrollYProgress !== undefined &&
    typeof stackIndex === "number" &&
    typeof stackCount === "number";

  if (!hasStackProps) {
    if (import.meta.env?.MODE !== "production") {
      console.error("<Card> must be rendered inside <CardStack>.");
    }
    return;
  }

  const overall = useTransform(scrollYProgress, [0, 1], [0, stackCount]);

  const local = useTransform(overall, (v) => {
    const raw = v - stackIndex; // index..index+1
    if (raw <= 0) return 0;
    if (raw >= 1) return 1;
    return raw;
  });

  const dropDistance =
    viewport === "big" || viewport === "laptop"
      ? 84
      : viewport === "tablet"
      ? 85
      : 84;

  const y = useTransform(local, (p) => `calc(${p} * ${dropDistance}vh)`);

  const blurAmount = useTransform(
    local,
    [CONTENT_FILTER_START, CONTENT_FILTER_END],
    [0, 4]
  );
  const blurFilter = useTransform(blurAmount, (b) => `blur(${b}px)`);
  const contentOpacity = useTransform(
    local,
    [CONTENT_FILTER_START, CONTENT_FILTER_END],
    [1, 0.2]
  );

  return (
    <motion.div
      className={`card card--stacked`}
      style={{
        y,
        zIndex: stackCount - stackIndex,
      }}
      {...props}
    >
      <motion.div
        className={classNames("card__content", className)}
        style={{
          filter: blurFilter,
          opacity: contentOpacity,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
