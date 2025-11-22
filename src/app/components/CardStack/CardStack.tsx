import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../utils/classnames";
import type { MotionValue } from "motion/react";

interface CardStackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | null;
  scrollYProgress: MotionValue<number>;
}

export const CardStack = ({
  children,
  className,
  ...props
}: CardStackProps) => {
  return (
    <div className={classNames("card-stack", className)} {...props}>
      {children}
    </div>
  );
};
