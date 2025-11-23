import { useResume } from "../../../context/resume/ResumeContext.hook";
import { Spinner } from "../../components/Spinner/Spinner";
import { StartSection } from "./StartSection.view";
import { ResumeSection } from "./ResumeSection.view";
import { EndSection } from "./EndSection.view";
import { useScroll } from "motion/react";
import { ScrollProgressBar } from "../../components/ScrollProgressBar/ScrollProgressBar";

export const Resume = () => {
  const { resume, isLoading } = useResume();
  const { scrollYProgress } = useScroll();

  if (isLoading || resume === null) {
    return <Spinner isFullPage={true} />;
  }

  return (
    <>
      <ScrollProgressBar scrollYProgress={scrollYProgress} />
      <StartSection project={resume.project} />
      <ResumeSection resume={resume} />
      <EndSection />
    </>
  );
};
