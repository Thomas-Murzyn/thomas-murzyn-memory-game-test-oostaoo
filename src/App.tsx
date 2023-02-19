import "./App.scss";
import Cards from "./components/cards/cards.component";
import { useAppSelector } from "./app/hooks";
import Button from "./components/button/button.component";
import { ButtonType } from "./components/button/button.component";

function App() {
  const points = useAppSelector((state) => state.game.points);

  return (
    <div className="App">
      <h1>Your score : {points}</h1>
      <Button buttonStyle={ButtonType.ButtonStart}>Start</Button>
      <Cards />
    </div>
  );
}

export default App;
