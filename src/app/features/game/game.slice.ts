import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum GameStatus {
  game = "game",
  success = "success",
  lose = "lose",
}

export type gameState = {
  points: number;
  cardsId: number[];
  cardsIndex: number[];
  cardsOpen: number[];
  isGameStarted: boolean;
  gameStatus: GameStatus;
};

export const initialState: gameState = {
  points: 0,
  cardsId: [],
  cardsIndex: [],
  cardsOpen: [],
  isGameStarted: false,
  gameStatus: GameStatus.game,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.isGameStarted = true;
      state.cardsId = [];
      state.cardsIndex = [];
      state.cardsOpen = [];
      state.points = 0;
      state.gameStatus = GameStatus.game;
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
      state.gameStatus = GameStatus.game;
    },
    endGame: (state, action: PayloadAction<GameStatus>) => {
      state.gameStatus = action.payload;
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
  endGame,
} = gameSlice.actions;

export default gameSlice.reducer;
