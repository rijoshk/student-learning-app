import React, { useState } from "react";
import AddControls from "./addControl";
import Scoreboard from "./scoreboard";
import ScoreContextProvider from "../context";
import data from "../assets/dataFiles/Addition.json";

const AddNumbers = () => {
  const [addData] = useState(data);

  const addStyle = {
    padding: "50px",
    fontFamily: "Arial",
  };

  return (
    <>
      {addData.map((item, index) => {
        return (
          <div key={index} style={addStyle}>
            <div key={item.Id}>
              <h2>{item.subject}</h2>
              <p>{item.question}</p>
            </div>
            <div>
              <ScoreContextProvider>
                <AddControls element={item}></AddControls>
                <Scoreboard></Scoreboard>
              </ScoreContextProvider>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AddNumbers;
