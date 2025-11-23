import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../utils/classnames";
import "./FloatingButton.css";

interface FloatingButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | null;
}

export const FloatingButton = ({ children, ...props }: FloatingButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={classNames("floating-button", props.className)}
    >
      {children}
    </button>
  );
};
