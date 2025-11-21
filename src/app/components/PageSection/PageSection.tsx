import { motion, useScroll } from "motion/react";
import { useParallax } from "../../../hooks/useParallax";
import { useRef } from "react";
import "./PageSection.css";

interface SectionProps {
  id: number;
}

export const PageSection = ({ id }: SectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax({ value: scrollYProgress, distance: 300 });

  return (
    <section className="section-container">
      <div ref={ref} className="section-box">
        Section #{id}
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
};
