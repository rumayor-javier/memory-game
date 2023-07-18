import "./Card.css";

export const Card = ({ card, handleCardPicked, flipped, animating }) => {
  const onPickCard = () => {
    handleCardPicked(card);
  };

  return (
    <div className={animating ? "" : "animating"}>
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <span className="back bg-primary text-warning" onClick={onPickCard}>
            ?
          </span>
          <span className="front">{card.image}</span>
        </div>
      </div>
    </div>
  );
};
