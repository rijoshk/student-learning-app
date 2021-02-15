import React from "react";
import { useGetScore } from "../context";
import CountDownTimer from "./timer";
import "./addition.css";

const Scoreboard = () => {
  const score = useGetScore();

  // React.useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [counter]);

  return (
    <div className="addition">
      <div>Score</div>
      <div>{score}</div>
      <div>Time elapsed</div>
      <div>
        <CountDownTimer minutes="01"></CountDownTimer>
      </div>
    </div>
  );
};

export default Scoreboard;
