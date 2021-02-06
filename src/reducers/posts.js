const defaultState = {
  posts: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "POSTS": {
      return {
        ...state,
        posts: action.payload
      };
    }
    default:
      return state;
  }
};
