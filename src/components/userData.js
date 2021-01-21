import React, { useState, useEffect } from "react";
import { data } from "../assets/dataFiles/dataList";

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
          <div key={Id} className="item">
            <h4>{level}</h4>
            {/* <h4>{text}</h4>npm start */}
            <button onClick={() => removeItem(Id)}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default LearningList;
