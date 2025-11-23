import { type Ref } from "react";
import { motion, usePresenceData } from "motion/react";
import type { Experience } from "../../../types/experience";
import "./Slide.css";

interface SlideProps {
  experience: Experience;
  ref?: Ref<HTMLDivElement>;
}

export const Slide = ({ experience, ref }: SlideProps) => {
  const direction = usePresenceData();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
      className="slide text-center"
    >
      <div className="text-lg text-bold">{experience.title}</div>
      <div className="text-sm">{experience.place}</div>
      <div className="text-xxs">
        {experience.timespan}
        {experience.languages !== null && ` | ${experience.languages}`}
      </div>
      <div className="responsive-margin description">
        {experience.description}
      </div>
    </motion.div>
  );
};
