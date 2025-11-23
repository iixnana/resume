import { useTheme } from "../../../context/theme/ThemeContext.hook";
import { classNames } from "../../../utils/classnames";
import type { IconOptions } from "./types";
import { MailSVG } from "../../../svg/MailSVG";
import "./Icon.css";
import { LocationSVG } from "../../../svg/LocationSVG";

interface IconProps {
  name: IconOptions;
  alt?: string;
  className?: string;
  canFocus?: boolean;
}

export const Icon = ({ name, alt = name, className, canFocus }: IconProps) => {
  const { isDark } = useTheme();

  const icons = [
    { name: "mail", component: MailSVG },
    { name: "location", component: LocationSVG },
    { name: "linkedin", theme: "light", src: "InBug-Black.png" },
    { name: "linkedin", theme: "dark", src: "InBug-White.png" },
  ];

  const icon = icons.find(
    (i) =>
      i.name === name && (!i.theme || i.theme === (isDark ? "dark" : "light"))
  );

  if (!icon) return null;

  const SvgComponent = icon.component;

  return (
    <div className={classNames("img-wrapper", canFocus && "icon-button")}>
      {SvgComponent ? (
        <SvgComponent
          aria-label={alt}
          className={classNames("social-media-icon", className)}
        />
      ) : (
        <img
          src={icon.src!}
          alt={alt}
          className={classNames("social-media-icon", className)}
        />
      )}
    </div>
  );
};
