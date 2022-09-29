import React from "react";
import { useDispatch } from "react-redux";
import { handleClickCard } from "../../redux/game/gameSlice";
import "./Card.css";

const Card = ({ card }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleClickCard(card.id));
  };
  return (
    <div
      className={`card ${card.isOpen ? "opened" : ""} ${
        card.isComplete ? "matched" : ""
      }`}
      onClick={handleClick}
    >
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
