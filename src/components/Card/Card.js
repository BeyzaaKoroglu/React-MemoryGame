import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="front">?</div>
      <div className="back">
        <img
          alt=""
          src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${card.name}.png`}
        />
      </div>
    </div>
  );
};

export default Card;
