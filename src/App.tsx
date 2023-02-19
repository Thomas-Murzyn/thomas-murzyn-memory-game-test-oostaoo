import "./App.scss";
import Cards from "./components/cards/cards.component";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import Button from "./components/button/button.component";
import { ButtonType } from "./components/button/button.component";
import { resetGame, startGame } from "./app/features/game/game.slice";
import { useState, useEffect } from "react";
import TimeBar from "./components/time-bar/time-bar.component";
import imagesList, { mixImages } from "./utils/Data";
import { imageType } from "./utils/Data";

function App() {
  const points = useAppSelector((state) => state.game.points);
  const isGameStarted = useAppSelector((state) => state.game.isGameStarted);
  const [images, setImages] = useState<imageType[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setImages(mixImages(imagesList));
  }, []);

  const handleClick = () => {
    if (isGameStarted) {
      dispatch(resetGame());
      setImages(mixImages(imagesList));
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
      <Cards images={images} />
      {isGameStarted && <TimeBar />}
    </div>
  );
}

export default App;
