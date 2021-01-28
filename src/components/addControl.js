import React, { useState } from "react";
import { useSetScore } from "../context";
import "./addition.css";

const AddControls = ({ element }) => {
  const [answer, setAnswer] = useState("");
  // const [optVal, setoptVal] = useState(0);
  const setScore = useSetScore();
  let nextVal = 0;

  const mystyle = {
    padding: "5px",
    fontFamily: "Arial",
    width: "50px",
  };

  const validateAnswer = () => {
    element.options.map((option) => {
      if (option !== "?") {
        nextVal = parseInt(option) + parseInt(option);
        return 0;
      } else return nextVal === parseInt(answer) ? setScore(1) : setScore(-1);
    });
  };

  const handleSubmit = (e) => {
    validateAnswer();
  };

  return (
    <div className="addition">
      {element.options.map((option, index) => {
        if (option === "?") {
          return (
            <span key={index}>
              <input
                type="text"
                id={index}
                style={mystyle}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              ></input>
              <code>,</code>
            </span>
          );
        } else {
          if (element.options.length - 1 === index) {
            return <code key={index}>{option}</code>;
          } else {
            return <code key={index}>{option + ","}</code>;
          }
        }
      })}
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
    </div>
  );
};

export default AddControls;
