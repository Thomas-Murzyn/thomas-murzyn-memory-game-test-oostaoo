import "./time-bar.styles.scss";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { endGame, GameStatus } from "../../app/features/game/game.slice";

function TimeBar() {
  const dispatch = useAppDispatch();
  const points = useAppSelector((state) => state.game.points);
  const [time, setTime] = useState(0);
  const myInterval: React.MutableRefObject<NodeJS.Timer | undefined> = useRef();

  // Set 0.5 to time every O.5 secondes. I choose to made it every 0.5 sec for a most fluent time bar
  const handleTime = () => {
    setTime((prevTime) => prevTime + 0.5);
  };

  // Set an interval only when starting
  useEffect(() => {
    myInterval.current = setInterval(handleTime, 500);

    return () => {
      clearInterval(myInterval.current);
    };
  }, []);

  // If point === 80 (score max), clear interval and dispatch endGame else if time = 60 sec if point = 80 => endGame(succes) else endGame(lose)
  useEffect(() => {
    if (points === 80) {
      clearInterval(myInterval.current);
      dispatch(endGame(GameStatus.success));
      // eslint-disable-next-line
    }

    if (time === 60) {
      clearInterval(myInterval.current);
      if (points === 80) {
        dispatch(endGame(GameStatus.success));
      } else {
        dispatch(endGame(GameStatus.lose));
      }
    }
    // eslint-disable-next-line
  }, [time]);

  return (
    <div className="time-bar-wrapper">
      <div
        // Fullfill the width based on time multiply by 1.66666667 for reach 100. Because 100 / 60 = 1.66666667
        style={{
          width: `${time * 1.66666667}%`,
          backgroundColor: `${time * 1.66666667 >= 85 ? "red" : "#4bb543"}`,
        }}
        className="time-bar"
      ></div>
    </div>
  );
}

export default TimeBar;
