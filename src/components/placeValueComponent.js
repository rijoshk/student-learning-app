import React, { useState, useEffect } from "react";
import { getQuestion, getPlaceValueofNumber } from "utils/utils";
import data from "assets/dataFiles/placeValues.json";
import { useDispatch } from "react-redux";

const PlaceValuesComp = () => {
  const dispatch = useDispatch();
  const [questionsData] = useState(data);
  const [answer, setAnswer] = useState("");
  var initialQn = { question: "", number: 0, placeVal: "" };
  const [question, setquestion] = useState(initialQn);

  const mystyle = {
    padding: "5px",
    fontFamily: "Arial",
    width: "50px",
  };

  useEffect(() => {
    const qn = getQuestion(questionsData[0].question);
    setquestion({
      question: qn.question,
      number: qn.number,
      placeVal: qn.placeVal,
    });
  }, [questionsData]);

  const validateAnswer = () => {
    var res = getPlaceValueofNumber(question.number, question.placeVal);
    dispatch({
      type: "ADD_QUESTION_ANSWERED",
      payload: {
        answeredCount: 1,
      },
    });

    if (parseInt(answer) === parseInt(res)) {
      dispatch({
        type: "ADD_SCORE",
        payload: {
          score: 1,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    validateAnswer();
    const qn = getQuestion(questionsData[0].question);
    setquestion({
      question: qn.question,
      number: qn.number,
      placeVal: qn.placeVal,
    });
    setAnswer("");
  };

  return (
    <div>
      <p>{question.question}</p>
      <p>
        <input
          type="text"
          style={mystyle}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></input>
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
    </div>
  );
};

export default PlaceValuesComp;
