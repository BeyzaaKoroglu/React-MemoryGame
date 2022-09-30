import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./game/gameSlice";
import modalSlice from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    game: gameSlice,
    modal: modalSlice,
  },
});
