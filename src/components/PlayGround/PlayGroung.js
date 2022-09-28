import React from "react";
import { useSelector } from "react-redux";
import { selectCard } from "../../redux/game/gameSlice";
import Card from "../Card";
import "./PlayGround.css";

const PlayGroung = () => {
  let cardsX2 = [...useSelector(selectCard), ...useSelector(selectCard)];

  cardsX2 = cardsX2
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="playground">
      {cardsX2.map((card, idx) => (
        <Card key={idx} card={card} />
      ))}
    </div>
  );
};

export default PlayGroung;
