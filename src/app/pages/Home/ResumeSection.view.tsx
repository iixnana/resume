import { useRef } from "react";
import type { Resume } from "../../../types/resume";
import { StackingCard } from "../../components/CardStack/StackingCard";
import { CardStack } from "../../components/CardStack/CardStack";
import { useScroll } from "motion/react";
import "./ResumeSection.css";
import "./PixelFrame.css";
import { SocialMediaButton } from "../../components/SocialMedia/SocialMediaButton";
import { Icon } from "../../components/Icon/Icon";

interface ResumeSectionProps {
  resume: Resume;
}

export const ResumeSection = ({ resume }: ResumeSectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="resume-section" ref={sectionRef} className="resume-section">
      <CardStack scrollYProgress={scrollYProgress}>
        <StackingCard id="information" className="card-content--center">
          <h2 className="screen-reader-only">Personal information</h2>
          <div className="portrait">
            <div className="pixel-frame">
              <img
                src="/pixel-art.png"
                alt="Portrait"
                className="pixel-frame__img"
              />
            </div>
          </div>
          <div className="personal-info--name text-xl">
            {resume.info.fullName}
          </div>
          <div className="personal-info--contact">
            <SocialMediaButton
              icon="mail"
              href={`mailto:${resume.info.contact.email}`}
            >
              {resume.info.contact.email}
            </SocialMediaButton>
            <SocialMediaButton
              icon="linkedin"
              href={resume.info.contact.linkedin}
              target="_blank"
            >
              LinkedIn
            </SocialMediaButton>
            <div className="location">
              <Icon name="location" />
              {resume.info.location}
            </div>
          </div>
          <div className="text-center responsive-margin">{resume.aboutMe}</div>
        </StackingCard>

        <StackingCard>
          <h2 className="card-title text-xxl">Education</h2>
          <div className="card-content--centered">
            <div className="education--title text-md">
              {resume.education.title}
            </div>
            <div className="text-center text-sm">{resume.education.place}</div>
            <div className="text-center text-xxs">
              {resume.education.timespan}
            </div>
            <div className="text-center responsive-margin">
              {resume.education.description}
            </div>
          </div>
        </StackingCard>

        <StackingCard>
          <h2 className="card-title text-xl">Experience</h2>
          {resume.experience.map((exp) => {
            return (
              <div key={exp.title + exp.place + exp.timespan}>
                <div>{exp.title}</div>
                <div>{exp.place}</div>
                <div>{exp.timespan}</div>
                <div>{exp.languages}</div>
                <div>{exp.description}</div>
              </div>
            );
          })}
        </StackingCard>

        <StackingCard>
          <h2 className="card-title text-xl">Skills</h2>
          {resume.skills.map((skillset) => (
            <div key={skillset.title}>
              <div>{skillset.title}</div>
              <div>{skillset.skills.map((skill) => skill)}</div>
            </div>
          ))}
        </StackingCard>

        <StackingCard>
          <h2 className="card-title text-xl">Languages</h2>
          {resume.languages.map((lang) => (
            <div key={lang.language}>
              <div>{lang.language}</div>
              <div>{lang.level}</div>
            </div>
          ))}
        </StackingCard>
      </CardStack>
    </section>
  );
};
