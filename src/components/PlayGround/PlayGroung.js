import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkOpenedCards,
  handleDublicateCards,
  selectDuplicatedCards,
  selectOpenedCards,
} from "../../redux/game/gameSlice";
import Card from "../Card";
import "./PlayGround.css";
import { handleModal } from "../../redux/modal/modalSlice";

const PlayGroung = () => {
  const dispatch = useDispatch();

  const duplicatedCards = useSelector(selectDuplicatedCards);
  const openedCards = useSelector(selectOpenedCards);
  const completedCards = useSelector((state) => state.game.completedCards);

  if (openedCards.length === 2) {
    setTimeout(() => {
      dispatch(checkOpenedCards());
    }, 750);
  }

  if (completedCards === 15) {
    dispatch(handleModal());
    dispatch(handleDublicateCards());
  }
  return (
    <div className="playground">
      {duplicatedCards.map((card, idx) => (
        <Card key={idx} card={card} />
      ))}
    </div>
  );
};

export default PlayGroung;
