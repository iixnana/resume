import { classNames } from "../../../utils/classnames";
import { FloatingButton } from "../FloatingButton/FloatingButton";
import "./ScrollToTopButton.css";

interface ScrollToTopProps {
  showScrollTop: boolean;
}

export const ScrollToTopButton = ({ showScrollTop }: ScrollToTopProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FloatingButton
      className={classNames(
        "scroll-to-top",
        showScrollTop && "scroll-to-top--visible"
      )}
      aria-label="Scroll to the top"
      onClick={scrollToTop}
    >
      ⬆️
    </FloatingButton>
  );
};
