import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../utils/classnames";
import "./Card.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | null;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={classNames("card", className)} {...props}>
      <div>{children}</div>
    </div>
  );
};
