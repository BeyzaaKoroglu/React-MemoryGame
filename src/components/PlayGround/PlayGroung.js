import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkOpenedCards,
  handleDublicateCards,
  selectDuplicatedCards,
  selectOpenedCards,
} from "../../redux/game/gameSlice";
import Card from "../Card";
import "./PlayGround.css";

const PlayGroung = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleDublicateCards());
  }, [dispatch]);

  const duplicatedCards = useSelector(selectDuplicatedCards);
  const openedCards = useSelector(selectOpenedCards);
  if (openedCards.length == 2) {
    setTimeout(() => {
      dispatch(checkOpenedCards());
    }, 750);
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
