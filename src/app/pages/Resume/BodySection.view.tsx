import type { Resume } from "../../../types/resume";
import { Card } from "../../components/Card/Card";
import { CardStack } from "../../components/CardStack/CardStack";

interface BodySectionProps {
  resume: Resume;
}

export const BodySection = ({ resume }: BodySectionProps) => {
  return (
    <section id="resume">
      <CardStack>
        <Card id="information">
          <h2 className="screen-reader-only">Personal information</h2>
          <div>{resume.info.fullName}</div>
          <div>{resume.info.location}</div>
          <div>{resume.info.contact.email}</div>
          <div>{resume.info.contact.linkedin}</div>
          <div>{resume.project.repo}</div>
          <div>{resume.project.issues}</div>
        </Card>
        <Card>
          <h2>About me</h2>
          {resume.aboutMe}
        </Card>
        <Card>
          <h2>Education</h2>
          <div>{resume.education.title}</div>
          <div>{resume.education.place}</div>
          <div>{resume.education.timespan}</div>
          <div>{resume.education.description}</div>
        </Card>
        <Card>
          <h2>Experience</h2>
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
        </Card>
        <Card>
          <h2>Skills</h2>
          {resume.skills.map((skillset) => (
            <div>
              <div>{skillset.title}</div>
              <div>{skillset.skills.map((skill) => skill)}</div>
            </div>
          ))}
        </Card>
        <Card>
          <h2>Languages</h2>
          {resume.languages.map((lang) => (
            <div>
              <div>{lang.language}</div>
              <div>{lang.level}</div>
            </div>
          ))}
        </Card>
      </CardStack>
    </section>
  );
};
