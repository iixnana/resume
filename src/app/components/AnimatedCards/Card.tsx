import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Folder } from "../../../svg/Folder";

interface CardProps {
  content: string;
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
      viewport={{ amount: 1 }}
    >
      <Folder className="folder" />
      <motion.div variants={cardVariants} className="animated-card">
        {content}
      </motion.div>
      <Folder className="folder backside" />
    </motion.div>
  );
};
