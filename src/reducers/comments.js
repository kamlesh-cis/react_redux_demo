const defaultState = {
  comments: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "COMMENTS": {
      return {
        ...state,
        comments: action.payload
      };
    }
    default:
      return state;
  }
};
