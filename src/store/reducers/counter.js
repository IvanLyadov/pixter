const initialState = {
  count: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      console.log("state", state);
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default rootReducer;
