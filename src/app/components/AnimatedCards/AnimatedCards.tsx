import { Card } from "./Card";
import "./AnimatedCards.css";

interface AnimatedCardsProps {
  cardContent: string[];
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
