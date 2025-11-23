import type { ReactNode } from "react";
import "./StackingCard.css";
import { motion, useTransform, type MotionValue } from "motion/react";
import { useCssVarResponsive } from "../../../hooks/useCssVarResponsive";

interface StackingCardProps {
  stackIndex?: number; // internal, injected by CardStack
  stackCount?: number; // internal, injected by CardStack
  scrollYProgress?: MotionValue<number>; // internal, injected by CardStack
}

export type CardProps = HTMLAttributes<HTMLDivElement> &
  StackingCardProps & {
    children: ReactNode;
  };

export const StackingCard = ({
  children,
  stackIndex,
  stackCount,
  scrollYProgress,
  ...props
}: CardProps) => {
  const hasStackProps =
    scrollYProgress !== undefined &&
    typeof stackIndex === "number" &&
    typeof stackCount === "number";

  // TODO
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

  const dropDistance = useCssVarResponsive("--card-drop-distance");

  const y = useTransform(local, (p) => `calc(${p} * ${dropDistance})`);

  console.log(dropDistance);

  return (
    <motion.div
      className={`card card--stacked`}
      style={{
        y,
        zIndex: stackCount - stackIndex,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
