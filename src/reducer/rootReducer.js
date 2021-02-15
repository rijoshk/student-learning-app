import { combineReducers } from "redux";
import scoreReducer from "reducer/scoreReducer";
import answeredReducer from "reducer/qnAnsweredReducer";

const rootReducer = combineReducers({
  score: scoreReducer,
  answered: answeredReducer,
});

export default rootReducer;
