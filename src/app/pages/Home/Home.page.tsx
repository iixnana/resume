import { useResume } from "../../../context/resume/ResumeContext.hook";
import { Spinner } from "../../components/Spinner/Spinner";
import { StartSection } from "./StartSection.view";
import { ResumeSection } from "./ResumeSection.view";
import { EndSection } from "./EndSection.view";
import { useMotionValueEvent, useScroll } from "motion/react";
import { ScrollProgressBar } from "../../components/ScrollProgressBar/ScrollProgressBar";
import { ScrollToTopButton } from "../../components/ScrollToTop/ScrollToTopButton";
import { useState } from "react";
import { SCROLL_TOP_THRESHOLD } from "./constants";

export const Home = () => {
  const { resume, isLoading } = useResume();
  const { scrollYProgress } = useScroll();

  const [showScrollTop, setShowScrollTop] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowScrollTop(latest > SCROLL_TOP_THRESHOLD);
  });

  if (isLoading || resume === null) {
    return <Spinner isFullPage={true} />;
  }

  return (
    <>
      <ScrollProgressBar scrollYProgress={scrollYProgress} />
      <StartSection project={resume.project} />
      <ResumeSection resume={resume} />
      <EndSection />
      <ScrollToTopButton showScrollTop={showScrollTop} />
    </>
  );
};
