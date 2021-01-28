import React, { createContext, useContext, useState } from "react";

export const ScoreContext = createContext();

const ScoreContextProvider = (props) => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {props.children}
    </ScoreContext.Provider>
  );
};

export const useGetScore = () => {
  const { score } = useContext(ScoreContext);
  return score;
};

export const useSetScore = () => {
  const { setScore } = useContext(ScoreContext);

  return (score) => {
    setScore(score);
  };
};

export default ScoreContextProvider;
