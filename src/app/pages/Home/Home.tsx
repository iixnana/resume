import { motion } from "motion/react";
import { useResume } from "../../../context/resume/ResumeContext.hook";
import { Card } from "../../components/Card/Card";
import { CardStack } from "../../components/CardStack/CardStack";
import { Computer } from "../../components/Computer/Computer";
import { Spinner } from "../../components/Spinner/Spinner";
import "./Home.css";
import GithubLogo from "/github-mark.svg";
import Logo from "/resumelogo.svg";
import { useRef } from "react";

export const Home = () => {
  const { resume, isLoading } = useResume();
  const constraintsRef = useRef(null);

  if (isLoading || resume === null) {
    return <Spinner />;
  }

  return (
    <>
      <section id="welcome" className="welcome-section">
        <div className="welcome-box" ref={constraintsRef}>
          <div className="welcome-box-inner">
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
            <h2 className="welcome-h2">Hello, world!</h2>
            <div>＼（＾▽＾）／</div>
            <p className="welcome-description">
              Thank you for visiting my website. It took quite a while to build,
              therefore each visitor is greaty appreciated! This was built for
              fun, therefore there is a few funny features. <br />
              <b>First tip:</b> try moving the logo.
              <br />
              Enjoy! o(^▽^)o
            </p>
            <a
              href="/kamile-nanartonyte-resume.pdf"
              download
              className="download-button"
            >
              Download Resume
            </a>
            <div className="git">
              <a
                href={resume.project.repo}
                target="_blank"
                className="git-link"
              >
                Code repository
              </a>
              <img src={GithubLogo} className="git-logo" />
              <a
                href={resume.project.issues}
                target="_blank"
                className="git-link"
              >
                Report issues
              </a>
            </div>
          </div>
        </div>
        <Computer />
      </section>
      <div className="table">
        <div className="table-inner" />
      </div>

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

      <section id="footer" className="footer">
        <div>(┛❍ᴥ❍ )┛彡┻━┻</div> <div className="author">Kamile @ 2025</div>
      </section>
    </>
  );
};
