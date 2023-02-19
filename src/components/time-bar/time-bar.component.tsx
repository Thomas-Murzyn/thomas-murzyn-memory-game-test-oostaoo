import "./time-bar.styles.scss";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { endGame, GameStatus } from "../../app/features/game/game.slice";

function TimeBar() {
  const dispatch = useAppDispatch();
  const points = useAppSelector((state) => state.game.points);
  const [time, setTime] = useState(0);
  const myInterval: React.MutableRefObject<NodeJS.Timer | undefined> = useRef();

  const handleTime = () => {
    setTime((prevTime) => prevTime + 0.5);
  };

  useEffect(() => {
    myInterval.current = setInterval(handleTime, 500);

    return () => {
      clearInterval(myInterval.current);
    };
  }, []);

  useEffect(() => {
    if (points === 80) {
      clearInterval(myInterval.current);
      dispatch(endGame(GameStatus.success));
    }

    if (time === 60) {
      clearInterval(myInterval.current);
      if (points === 80) {
        dispatch(endGame(GameStatus.success));
      } else {
        dispatch(endGame(GameStatus.lose));
      }
    }
  }, [time]);

  return (
    <div className="time-bar-wrapper">
      <div
        style={{ width: `${time * 1.66666667}%` }}
        className="time-bar"
      ></div>
    </div>
  );
}

export default TimeBar;
