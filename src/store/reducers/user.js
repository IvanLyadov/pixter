const initialState = {
  token: null,
  userId: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return {
        token: action.token
      };
    case "UPDATE_USERID":
      return {
        userId: action.userId
      };
    default:
      return state;
  }
};

export default rootReducer;