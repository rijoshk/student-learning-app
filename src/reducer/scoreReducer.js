const initialState = {
  score: 0,
};

const scoreReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_SCORE":
      let newScore = state.score + payload.score;
      return { ...state, score: newScore };

    default:
      break;
  }

  return state;
};

export default scoreReducer;
