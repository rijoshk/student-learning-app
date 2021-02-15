import { createStore } from "redux";
import scoreReducer from "reducer/scoreReducer";

const initialScoreBoard = {
  score: 0,
  question_answered: 0,
};

const scoreStore = createStore(scoreReducer, initialScoreBoard);

export default scoreStore;
