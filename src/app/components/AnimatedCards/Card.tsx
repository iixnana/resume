import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Folder } from "../../../svg/Folder";
import type { Experience } from "../../../types/experience";

interface CardProps {
  content: Experience;
  i: number;
}

export const Card = ({ content, i }: CardProps) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      y: "-60vh",
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <Folder className="folder" />
      <div className="hide-bounce-overflow" />
      <motion.div variants={cardVariants} className="animated-card">
        <div>{content.title}</div>
        <div>{content.place}</div>
        <div>{content.timespan}</div>
        <div>{content.languages}</div>
        <div>{content.description}</div>
      </motion.div>
      <Folder className="folder backside" />
    </motion.div>
  );
};
