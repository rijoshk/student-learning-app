import React, { useState } from "react";
import { data } from "../assets/dataFiles/dataList";
import "./userData.css";

const LearningList = () => {
  const [learning, setlearning] = useState(data);

  const removeItem = (id) => {
    let newPeople = learning.filter((item) => item.Id !== id);
    setlearning(newPeople);
  };

  return (
    <>
      {learning.map((learn) => {
        const { Id, level, text } = learn;

        return (
          <div key={Id} className="mainDiv">
            <h2>{level}</h2>
            <p>{text}</p>
            <button onClick={() => removeItem(Id)}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default LearningList;
