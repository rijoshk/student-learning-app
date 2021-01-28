import React, { useEffect, useState } from "react";
import { useGetScore } from "../context";

const CountDownTimer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);
  const score = useGetScore();
  const [over, setOver] = useState(false);

  const tick = () => {
    if (over || score === 1) return;
    if (h === 0 && m === 0 && s === 0) setOver(true);
    else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="App">
      <p>
        {`${h.toString().padStart(2, "0")}:
          ${m.toString().padStart(2, "0")}:
          ${s.toString().padStart(2, "0")}`}
      </p>
      <p>
        {`HR:
          MIN:
          SEC`}
      </p>
      <div>{over ? "Time's up!" : ""}</div>
    </div>
  );
};

export default CountDownTimer;
