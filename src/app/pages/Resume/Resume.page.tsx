import { useResume } from "../../../context/resume/ResumeContext.hook";
import { Spinner } from "../../components/Spinner/Spinner";
import { HeaderSection } from "./HeaderSection.view";
import { BodySection } from "./BodySection.view";
import { FooterSection } from "./FooterSection.view";
import "./Resume.css";
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
      <HeaderSection project={resume.project} />
      <BodySection resume={resume} />
      <FooterSection />
    </>
  );
};
