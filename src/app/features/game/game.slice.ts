import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type gameState = {
  points: number;
  cardsId: number[];
  cardsIndex: number[];
  cardsOpen: number[];
};

export const initialState: gameState = {
  points: 0,
  cardsId: [],
  cardsIndex: [],
  cardsOpen: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    playerWin: (state, action: PayloadAction<number>) => {
      state.points += 10;
      state.cardsOpen = state.cardsOpen.concat([
        state.cardsId[0],
        action.payload,
      ]);
    },
    addCardsIdAndIndex: (
      state,
      action: PayloadAction<{ id: number; index: number }>
    ) => {
      state.cardsId = state.cardsId.concat(action.payload.id);
      state.cardsIndex = state.cardsIndex.concat(action.payload.index);
    },
    resetCardsIdAndIndex: (state) => {
      state.cardsId = [];
      state.cardsIndex = [];
    },
    resetGame: (state) => {
      state.cardsId = [];
      state.cardsIndex = [];
      state.cardsOpen = [];
      state.points = 0;
    },
  },
});

export const {
  playerWin,
  addCardsIdAndIndex,
  resetCardsIdAndIndex,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
