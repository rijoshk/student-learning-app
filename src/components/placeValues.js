import React from "react";
import Scoreboard from "components/scoreboardnew";
import PlaceValuesComp from "components/placeValueComponent";
import QuestionAnswered from "components/QuestionsAnswered";
import CountDownTimer from "./timerNew";
import "components/userData.css";
import { useSelector } from "react-redux";

const PlaceValues = () => {
  const score = useSelector((state) => state.score);
  const answered = useSelector((state) => state.answered);

  return (
    <div className="rowC">
      <PlaceValuesComp></PlaceValuesComp>
      <div>
        <Scoreboard score={score.score}></Scoreboard>
        <QuestionAnswered answered={answered.answeredCount}></QuestionAnswered>
        <CountDownTimer minutes="01" score={score.score}></CountDownTimer>
      </div>
    </div>
  );
};

export default PlaceValues;
