import { AnimatePresence, motion, wrap } from "motion/react";
import { ArrowRight } from "../../../svg/ArrowRightSVG";
import { ArrowLeft } from "../../../svg/ArrowLeftSVG";
import { Slide } from "./Slide";
import { useState } from "react";
import type { Experience } from "../../../types/experience";
import "./ExperienceSlideshow.css";

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSlideshow = ({ experiences }: ExperienceProps) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function setSlide(newDirection: 1 | -1) {
    if (experiences.length === 0) return;

    const nextIndex = wrap(0, experiences.length, index + newDirection);
    setIndex(nextIndex);
    setDirection(newDirection);
  }

  if (experiences.length === 0) {
    return <div>No experience yet.</div>;
  }

  const currentExperience = experiences[index];

  return (
    <div className="container">
      <motion.button
        initial={false}
        aria-label="Previous"
        className="slide-button"
        onClick={() => setSlide(-1)}
        whileFocus={{ outline: `2px solid black` }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft className="slide-button-icon" /> {"<"}
      </motion.button>

      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide
          key={`${currentExperience.title}-${currentExperience.place}-${index}`}
          experience={currentExperience}
        />
      </AnimatePresence>

      <motion.button
        initial={false}
        aria-label="Next"
        className="slide-button"
        onClick={() => setSlide(1)}
        whileFocus={{ outline: `2px solid black` }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="slide-button-icon" />
        {">"}
      </motion.button>
    </div>
  );
};
