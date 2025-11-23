import type { HTMLAttributes, ReactNode } from "react";
import "./Card.css";
import { motion, useTransform, type MotionValue } from "motion/react";

interface CardBaseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardStackProps {
  stackIndex?: number;
  stackCount?: number;
  scrollYProgress?: MotionValue<number>;
}

export type CardProps = CardBaseProps & CardStackProps;

export const Card = ({
  children,
  stackIndex,
  stackCount,
  scrollYProgress,
  className,
  ...props
}: CardProps) => {
  const isStacked =
    scrollYProgress !== undefined &&
    typeof stackIndex === "number" &&
    typeof stackCount === "number";

  if (!isStacked) {
    return (
      <div className={`card ${className}`} {...props}>
        {children}
      </div>
    );
  }

  const overall = useTransform(scrollYProgress, [0, 1], [0, stackCount]);

  const local = useTransform(overall, (v) => {
    const raw = v - stackIndex; // index..index+1
    if (raw <= 0) return 0;
    if (raw >= 1) return 1;
    return raw;
  });

  const y = useTransform(local, (p) => `${p * 181}%`);

  return (
    <motion.div
      className={`card card--stacked ${className}`}
      style={{
        y,
        zIndex: stackCount - stackIndex,
      }}
    >
      {children}
    </motion.div>
  );
};
