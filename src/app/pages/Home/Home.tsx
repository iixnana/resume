import "./Home.css";
import { AnimatedCards } from "../../components/AnimatedCards/AnimatedCards";
import resumeContent from "../../../content/resume.json";
import type { Experience } from "../../../types/experience";

export const Home = () => {
  const data: Experience[] = resumeContent.experience;

  return <AnimatedCards cardContent={data} />;
};
