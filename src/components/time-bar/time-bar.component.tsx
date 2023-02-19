import "./time-bar.styles.scss";
import { useState, useEffect, useRef } from "react";

function TimeBar() {
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
    if (time === 60) {
      clearInterval(myInterval.current);
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
