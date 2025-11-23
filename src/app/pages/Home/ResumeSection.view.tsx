import { useRef } from "react";
import type { Resume } from "../../../types/resume";
import { StackingCard } from "../../components/CardStack/StackingCard";
import { CardStack } from "../../components/CardStack/CardStack";
import { useScroll } from "motion/react";
import "./ResumeSection.css";
import "./PixelFrame.css";
import { SocialMediaButton } from "../../components/SocialMedia/SocialMediaButton";
import { Icon } from "../../components/Icon/Icon";
import { Pill } from "../../components/Pill/Pill";
import { ExperienceSlideshow } from "../../components/ExperienceSlideshow/ExperienceSlideshow";

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
          <div className="personal-info--name text-xxl">
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
          <div className="card-content--centered text-center">
            <div className="text-bold text-lg">{resume.education.title}</div>
            <div className="text-sm">{resume.education.place}</div>
            <div className="text-xxs">{resume.education.timespan}</div>
            <div className="responsive-margin">
              {resume.education.description}
            </div>
          </div>
        </StackingCard>

        <StackingCard>
          <h2 className="card-title text-xxl">Experience</h2>
          <div className="card-content--centered">
            <ExperienceSlideshow experiences={resume.experience} />
            <span className="text-center exp-total">
              <span className="text-bold">Total:</span> 6 years
            </span>
          </div>
        </StackingCard>

        <StackingCard>
          <h2 className="card-title text-xxl">Skills</h2>
          <div className="card-content--centered card-content--list-gap">
            {resume.skills.map((skillset) => (
              <div className="skillset" key={skillset.title}>
                <div className="text-md text-bold">{skillset.title}</div>
                <div className="skill-container responsive-margin">
                  {skillset.skills.map((skill) => (
                    <Pill>{skill}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </StackingCard>

        <StackingCard>
          <h2 className="card-title text-xxl">Languages</h2>
          <div className="card-content--centered">
            <div className="language-legend">
              {["A1", "A2", "B1", "B2", "C1", "Native"].map((level) => (
                <div className="legend-item text-xxs" key={level}>
                  <span
                    className={`legend-dot legend-${level.toLowerCase()}`}
                  ></span>
                  {level}
                </div>
              ))}
            </div>

            <div className="language-list">
              {resume.languages.map((lang) => (
                <div key={lang.language} className="language-item">
                  <div className="language-label">
                    <span className="text-bold text-sm">{lang.language}</span>
                    <span className="text-xxs">{lang.level}</span>
                  </div>

                  <div
                    className={`language-bar language-bar--${lang.level.toLowerCase()}`}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </StackingCard>
      </CardStack>
    </section>
  );
};
