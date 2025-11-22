import { motion, MotionValue } from "motion/react";
import "./ScrollProgressBar.css";

interface ScrollProgressBarProps {
  scrollYProgress: MotionValue<number>;
}

export const ScrollProgressBar = ({
  scrollYProgress,
}: ScrollProgressBarProps) => {
  return (
    <motion.div
      id="scroll-indicator"
      className="progress-bar"
      style={{
        scaleX: scrollYProgress,
        originX: 0,
      }}
    />
  );
};
