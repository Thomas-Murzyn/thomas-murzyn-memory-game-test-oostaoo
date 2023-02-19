import "./App.scss";
import Cards from "./components/cards/cards.component";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import Button from "./components/button/button.component";
import { ButtonType } from "./components/button/button.component";
import { resetGame, startGame } from "./app/features/game/game.slice";

import TimeBar from "./components/time-bar/time-bar.component";

function App() {
  const points = useAppSelector((state) => state.game.points);
  const isGameStarted = useAppSelector((state) => state.game.isGameStarted);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (isGameStarted) {
      dispatch(resetGame());
    } else {
      dispatch(startGame());
    }
  };

  return (
    <div className="App">
      <div className="game-header">
        <h2>Memory Game</h2>
        <h2>Your score : {points}</h2>
        <Button
          onClick={handleClick}
          buttonStyle={
            isGameStarted ? ButtonType.ButtonReset : ButtonType.ButtonStart
          }
        >
          {isGameStarted ? "Reset" : "Start"}
        </Button>
      </div>
      <Cards />
      {isGameStarted && <TimeBar />}
    </div>
  );
}

export default App;
