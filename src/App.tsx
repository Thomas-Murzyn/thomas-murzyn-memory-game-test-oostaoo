import "./App.scss";
import Cards from "./components/cards/cards.component";
import { useAppSelector } from "./app/hooks";

function App() {
  const points = useAppSelector((state) => state.game.points);

  return (
    <div className="App">
      <h1>Your score : {points}</h1>
      <Cards />
    </div>
  );
}

export default App;
