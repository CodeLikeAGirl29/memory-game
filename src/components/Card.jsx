import React from "react";

const Card = ({ id, name, image, handleCardClick }) => (
  <div className="card" onClick={() => handleCardClick(id)}>
    <img src={image} alt={name} />
    <h3>{name}</h3>
  </div>
);

export default Card;
