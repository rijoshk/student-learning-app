import React from "react";
import "./addition.css";

const Scoreboard = (props) => {
  return (
    <div className="addition">
      <div>Score Board</div>
      <div>{props.score}</div>
      <div>Time elapsed</div>
    </div>
  );
};

export default Scoreboard;
