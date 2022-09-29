import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    cards: [
      {
        id: 1,
        name: "react",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 2,
        name: "angular2",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 3,
        name: "vue",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 4,
        name: "grunt",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 5,
        name: "phantomjs",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 6,
        name: "ember",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 7,
        name: "babel",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 8,
        name: "ionic",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 9,
        name: "gulp",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 10,
        name: "meteor",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 11,
        name: "yeoman",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 12,
        name: "yarn",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 13,
        name: "nodejs",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 14,
        name: "bower",
        isOpen: false,
        isComplete: false,
      },
      {
        id: 15,
        name: "browserify",
        isOpen: false,
        isComplete: false,
      },
    ],
    duplicatedCards: [],
    openedCards: [],
  },
  reducers: {
    handleDublicateCards: {
      reducer: (state) => {
        const cardsLength = state.cards.length;
        const idChangedCards = JSON.parse(JSON.stringify(state.cards));
        idChangedCards.forEach((card) => (card.id += cardsLength));
        state.duplicatedCards = [...state.cards, ...idChangedCards]
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
      },
    },
    handleClickCard: {
      reducer: (state, action) => {
        const card = state.duplicatedCards.find(
          (card) => card.id === action.payload
        );
        if (!card.isOpen) {
          card.isOpen = true;
          state.openedCards.push(card);
        }
      },
    },
    checkOpenedCards: {
      reducer: (state) => {
        if (state.openedCards[0]) {
          if (state.openedCards[0].name === state.openedCards[1].name) {
            state.openedCards.forEach((openedCard) => {
              const card = state.duplicatedCards.find(
                (card) => card.id === openedCard.id
              );
              card.isComplete = true;
            });
          } else {
            state.openedCards.forEach((openedCard) => {
              const card = state.duplicatedCards.find(
                (card) => card.id === openedCard.id
              );
              card.isOpen = false;
            });
          }
        }

        state.openedCards = [];
      },
    },
  },
});

export const selectCards = (state) => state.game.cards;
export const selectDuplicatedCards = (state) => state.game.duplicatedCards;
export const selectOpenedCards = (state) => state.game.openedCards;

export const { handleDublicateCards, handleClickCard, checkOpenedCards } =
  gameSlice.actions;
export default gameSlice.reducer;
