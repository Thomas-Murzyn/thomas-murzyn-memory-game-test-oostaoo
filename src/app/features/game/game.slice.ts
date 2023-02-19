import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type gameState = {
  points: number;
  cardsId: number[];
  cardsIndex: number[];
  cardsOpen: number[];
  isGameStarted: boolean;
};

export const initialState: gameState = {
  points: 0,
  cardsId: [],
  cardsIndex: [],
  cardsOpen: [],
  isGameStarted: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.isGameStarted = true;
    },
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
      state.isGameStarted = false;
    },
  },
});

export const {
  playerWin,
  addCardsIdAndIndex,
  resetCardsIdAndIndex,
  resetGame,
  startGame,
} = gameSlice.actions;

export default gameSlice.reducer;
