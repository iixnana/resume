import { useResume } from "../../../context/resume/ResumeContext.hook";
import { Spinner } from "../../components/Spinner/Spinner";
import "./Home.css";

export const Home = () => {
  const { resume, isLoading } = useResume();

  if (isLoading || resume === null) {
    return <Spinner />;
  }

  return (
    <div>
      <div id="information">
        <h2 className="screen-reader-only">Personal information</h2>
        <div>{resume.info.fullName}</div>
        <div>{resume.info.location}</div>
        <div>{resume.info.contact.email}</div>
        <div>{resume.info.contact.linkedin}</div>
      </div>
      <div>
        <h2>About me</h2>
        {resume.aboutMe}
      </div>
      <div>
        <h2>Education</h2>
        <div>{resume.education.title}</div>
        <div>{resume.education.place}</div>
        <div>{resume.education.timespan}</div>
        <div>{resume.education.description}</div>
      </div>
      <div>
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
      </div>
      <div>
        <h2>Skills</h2>
        {resume.skills.map((skillset) => (
          <div>
            <div>{skillset.title}</div>
            <div>{skillset.skills.map((skill) => skill)}</div>
          </div>
        ))}
      </div>
      <div>
        <h2>Languages</h2>
        {resume.languages.map((lang) => (
          <div>
            <div>{lang.language}</div>
            <div>{lang.level}</div>
          </div>
        ))}
      </div>
      <div>
        <div>{resume.project.repo}</div>
        <div>{resume.project.issues}</div>
      </div>
    </div>
  );
};
