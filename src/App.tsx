import "./App.scss";
import Cards from "./components/cards/cards.component";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import Button from "./components/button/button.component";
import { ButtonType } from "./components/button/button.component";
import { resetGame } from "./app/features/game/game.slice";
import { useState } from "react";

function App() {
  const points = useAppSelector((state) => state.game.points);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetGame());
  };

  return (
    <div className="App">
      <h1>Your score : {points}</h1>
      <Button onClick={handleClick} buttonStyle={ButtonType.ButtonReset}>
        Reset
      </Button>
      <Cards />
    </div>
  );
}

export default App;
