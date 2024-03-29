const initialState = {
  toast: false,
  message: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return { toast: true, message: action.message };
    case "HIDE":
      return { toast: false, message: "" };
    default:
      return state;
  }
};

export default rootReducer;
