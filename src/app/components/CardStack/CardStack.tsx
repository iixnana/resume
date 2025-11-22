import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../utils/classnames";

interface CardStackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | null;
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
