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
            <div>＼（＾▽＾）／</div>
            <p className="welcome-description">
              Thank you for visiting my website, each visitor is greatly
              appreciated! Due to limited time, this is only the first version
              of the website, thus there may be issues. If you find something,
              feel free to report it through the link below. There will be more
              fun features implemented in the future.
              <br />
              <b>First tip:</b> Try moving the logo.
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
