import { motion } from "motion/react";
import Logo from "/resumelogo.svg";
import type { RefObject } from "react";
import "./ResumeLogo.css";

interface ResumeLogoProps {
  constraintsRef: RefObject<HTMLDivElement | null>;
}

export const ResumeLogo = ({ constraintsRef }: ResumeLogoProps) => {
  return (
    <motion.img
      src={Logo}
      alt="Kamile's Resume Logo"
      className="logo"
      drag
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      style={{
        width: 240,
        borderRadius: 12,
        userSelect: "none",
        touchAction: "none",
      }}
      draggable={false} // prevent the browser's native image drag ghost
      dragConstraints={constraintsRef}
      dragElastic={0.2}
    />
  );
};
