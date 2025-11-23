import type { HTMLAttributes, ReactNode } from "react";
import "./SocialMediaButton.css";
import { Icon } from "../Icon/Icon";
import type { IconOptions } from "../Icon/types";

interface SocialMediaButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode | null;
  icon: IconOptions;
  href: string;
  target?: string;
}

export const SocialMediaButton = ({
  children,
  icon,
  href,
  target,
  ...props
}: SocialMediaButtonProps) => {
  return (
    <a {...props} href={href} target={target} className="social-media-button">
      <Icon name={icon} canFocus={true} />
      {children}
    </a>
  );
};
