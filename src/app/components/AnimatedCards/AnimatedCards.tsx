import { Card } from "./Card";
import "./AnimatedCards.css";
import type { Experience } from "../../../types/experience";

interface AnimatedCardsProps {
  cardContent: Experience[];
}

export const AnimatedCards = ({ cardContent }: AnimatedCardsProps) => {
  return (
    <div className="container">
      {cardContent.map((card, i) => (
        <Card i={i} content={card} key={card} />
      ))}
    </div>
  );
};
