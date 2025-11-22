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
        <div></div>
      </div>

      <div>{resume.aboutMe}</div>
    </div>
  );
};
