import { Card } from "./Card";
import { useGameLogic } from "../hooks/useGameLogic";

export const CardsBoard = () => {
  const { cards, handleCardPicked, cardOne, cardTwo, animating } =
    useGameLogic();

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleCardPicked={handleCardPicked}
          flipped={
            card === cardOne || card === cardTwo || card.matched ? true : false
          }
          animating={animating}
        />
      ))}
    </div>
  );
};
