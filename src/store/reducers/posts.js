const initialState = {
  posts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_POSTS":
      return { posts: action.posts };
    default:
      return state;
  }
};

export default rootReducer;
