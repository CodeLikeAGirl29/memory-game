import React from "react";
import Card from "./Card";

const CardGrid = ({ cards, handleCardClick }) => (
  <div className="card-grid">
    {cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        image={card.image}
        handleCardClick={handleCardClick}
      />
    ))}
  </div>
);

export default CardGrid;
