import React from "react";
import "./addition.css";

const QuestionAnswered = (props) => {
  return (
    <div className="addition">
      <div>Question Answered</div>
      <div>{props.answered}</div>
    </div>
  );
};

export default QuestionAnswered;
