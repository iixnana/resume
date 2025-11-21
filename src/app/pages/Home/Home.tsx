import "./Home.css";
import { AnimatedCards } from "../../components/AnimatedCards/AnimatedCards";

export const Home = () => {
  const food: string[] = ["🍅", "🍊", "🍋", "🍐", "🍏", "🫐", "🍆", "🍇"];

  return <AnimatedCards cardContent={food} />;
};
