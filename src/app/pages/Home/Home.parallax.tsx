import { motion } from "motion/react";
import { useRef } from "react";
import "./Home.parallax.css";
import { PageSection } from "./PageSection";

export const Home = () => {
  return (
    <div id="example">
      {[1, 2, 3, 4, 5].map((section) => (
        <PageSection key={section} id={section} />
      ))}
      <div className="progress" />
    </div>
  );
};
