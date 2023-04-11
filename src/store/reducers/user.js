const initialState = {
  token: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return { token: action.token };
    default:
      return state;
  }
};

export default rootReducer;
