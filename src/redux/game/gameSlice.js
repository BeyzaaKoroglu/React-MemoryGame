import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    cards: [
      {
        id: 1,
        name: "react",
      },
      {
        id: 2,
        name: "angular2",
      },
      {
        id: 3,
        name: "vue",
      },
      {
        id: 4,
        name: "grunt",
      },
      {
        id: 5,
        name: "phantomjs",
      },
      {
        id: 6,
        name: "ember",
      },
      {
        id: 7,
        name: "babel",
      },
      {
        id: 8,
        name: "ionic",
      },
      {
        id: 9,
        name: "gulp",
      },
      {
        id: 10,
        name: "meteor",
      },
      {
        id: 11,
        name: "yeoman",
      },
      {
        id: 12,
        name: "yarn",
      },
      {
        id: 13,
        name: "nodejs",
      },
      {
        id: 14,
        name: "bower",
      },
      {
        id: 15,
        name: "browserify",
      },
    ],
  },
  reducers: {},
});

export const selectCard = (state) => state.game.cards;

export default gameSlice.reducer;
