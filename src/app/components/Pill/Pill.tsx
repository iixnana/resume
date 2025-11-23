import type { ReactNode } from "react";
import "./Pill.css";
import { classNames } from "../../../utils/classnames";

interface PillProps {
  children: ReactNode | null;
  className?: string;
}

export const Pill = ({ children, className }: PillProps) => {
  return (
    <div className={classNames("pill", "text-xs", className)}>{children}</div>
  );
};
