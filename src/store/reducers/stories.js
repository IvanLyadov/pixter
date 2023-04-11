const initialState = {
  stories: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STORIES":
      return { stories: action.stories };
    default:
      return state;
  }
};

export default rootReducer;
