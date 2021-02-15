import { ActionTypes } from "utils/constants";

const initialState = {
  answeredCount: 0,
};

const answeredReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.ADD_QUESTION_ANSWERED:
      let newCount = state.answeredCount + payload.answeredCount;
      return { ...state, answeredCount: newCount };

    default:
      break;
  }

  return state;
};

export default answeredReducer;
