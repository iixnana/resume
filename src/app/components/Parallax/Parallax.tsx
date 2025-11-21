import { motion, useScroll, useSpring } from "motion/react";
import "./Parallax.css";
import { PageSection } from "./PageSection";

export const Parallax = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="parallax-page">
      {[1, 2, 3, 4, 5].map((section) => (
        <PageSection key={section} id={section} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
};
