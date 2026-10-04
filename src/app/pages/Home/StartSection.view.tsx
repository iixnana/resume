import { Computer } from "../../components/Computer/Computer";
import { ResumeLogo } from "../../components/ResumeLogo/ResumeLogo";
import { useRef } from "react";
import type { Project } from "../../../types/project";
import GithubLogo from "/github-mark.svg";
import "./StartSection.css";

interface HeaderSectionProps {
  project: Project;
}

export const StartSection = ({ project }: HeaderSectionProps) => {
  const constraintsRef = useRef(null);

  return (
    <>
      <section id="start-section" className="welcome-section">
        <div className="welcome-box" ref={constraintsRef}>
          <div className="welcome-box-inner">
            <ResumeLogo constraintsRef={constraintsRef} />
            <h2 className="welcome-h2">Hello, World!</h2>
            <div className="welcome-description">
              <p>
                I hope you enjoy this interactive version of my resume (Tip: try
                moving the logo). I built it from scratch using my own skills
                and experience — no AI coding assistants like Claude were used
                to create it. Consider it a small showcase of how I think,
                design, and build.
              </p>
              <p>
                I’m currently looking for a new opportunity as a{" "}
                <b>Frontend Engineer</b> or{" "}
                <b>Frontend-Heavy Fullstack Engineer</b>, where I can combine
                strong engineering skills with my extensive background in UX and
                user-centered design.
              </p>
              <p>Have fun exploring — and thanks for being here! o(^▽^)o</p>
            </div>
            <a
              href="/kamile-nanartonyte-resume.pdf"
              download
              className="download-button"
            >
              Download Resume
            </a>
            <div className="git">
              <a href={project.repo} target="_blank" className="git-link">
                Code repository
              </a>
              <img src={GithubLogo} className="git-logo" />
              <a href={project.issues} target="_blank" className="git-link">
                Report issues
              </a>
            </div>
          </div>
        </div>
        <Computer />
      </section>
      <div id="table-decoration" className="table">
        <div className="table-inner" />
      </div>
    </>
  );
};
