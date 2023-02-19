import "./App.scss";
import Cards from "./components/cards/cards.component";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import Button from "./components/button/button.component";
import { ButtonType } from "./components/button/button.component";
import { resetGame } from "./app/features/game/game.slice";
import { useState, useEffect, useRef } from "react";

function App() {
  const points = useAppSelector((state) => state.game.points);
  const dispatch = useAppDispatch();
  const [time, setTime] = useState(0);
  const myInterval: React.MutableRefObject<NodeJS.Timer | undefined> = useRef();

  const handleTime = () => {
    setTime((prevTime) => prevTime + 1);
  };

  useEffect(() => {
    myInterval.current = setInterval(handleTime, 1000);

    return () => {
      clearInterval(myInterval.current);
    };
  }, []);

  useEffect(() => {
    if (time === 60) {
      clearInterval(myInterval.current);
    }
  }, [time]);

  const handleClick = () => {
    dispatch(resetGame());
  };

  return (
    <div className="App">
      <div className="game-header">
        <h1>Your score : {points}</h1>
        <Button onClick={handleClick} buttonStyle={ButtonType.ButtonReset}>
          Reset
        </Button>
      </div>
      <Cards />
    </div>
  );
}

export default App;
