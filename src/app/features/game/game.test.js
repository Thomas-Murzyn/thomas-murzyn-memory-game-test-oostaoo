import reducer, {
  initialState,
  playerWin,
  addCardsIdAndIndex,
  resetCardsIdAndIndex,
  resetGame,
  startGame,
  endGame,
} from "./game.slice";

describe("Game reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle startGame", () => {
    const actual = reducer(initialState, startGame());
    expect(actual.isGameStarted).toEqual(true);
    expect(actual.cardsId).toEqual([]);
    expect(actual.cardsIndex).toEqual([]);
    expect(actual.cardsOpen).toEqual([]);
    expect(actual.points).toEqual(0);
    expect(actual.gameStatus).toEqual("game");
  });

  it("should handle playerWin", () => {
    const state = { ...initialState, cardsId: [1], cardsOpen: [], points: 0 };
    const actual = reducer(state, playerWin(1));
    expect(actual.points).toEqual(10);
    expect(actual.cardsOpen).toEqual([1, 1]);
  });

  it("should handle addCardsIdAndIndex", () => {
    const actual = reducer(
      initialState,
      addCardsIdAndIndex({ id: 1, index: 2 })
    );
    expect(actual.cardsId).toEqual([1]);
    expect(actual.cardsIndex).toEqual([2]);
  });

  it("should handle resetCardsIdAndIndex", () => {
    const state = { ...initialState, cardsId: [1], cardsIndex: [2] };
    const actual = reducer(state, resetCardsIdAndIndex());
    expect(actual.cardsId).toEqual([]);
    expect(actual.cardsIndex).toEqual([]);
  });

  it("should handle resetGame", () => {
    const state = {
      ...initialState,
      isGameStarted: true,
      points: 10,
      cardsId: [1],
      cardsOpen: [2],
    };
    const actual = reducer(state, resetGame());
    expect(actual.cardsId).toEqual([]);
    expect(actual.cardsIndex).toEqual([]);
    expect(actual.cardsOpen).toEqual([]);
    expect(actual.points).toEqual(0);
    expect(actual.isGameStarted).toEqual(false);
    expect(actual.gameStatus).toEqual("game");
  });

  it("should handle endGame", () => {
    const actual = reducer(initialState, endGame("lose"));
    expect(actual.isGameStarted).toEqual(false);
    expect(actual.gameStatus).toEqual("lose");
  });
});
