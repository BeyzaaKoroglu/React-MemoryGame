import React from "react";
import { useDispatch } from "react-redux";
import { handleModal } from "../../redux/modal/modalSlice";
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleModal());
  };
  return (
    <div className="modalBackground">
      <button className="button" onClick={handleClick}>
        Start Game
      </button>
    </div>
  );
};

export default Modal;
