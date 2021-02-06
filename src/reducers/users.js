const defaultState = {
  usersList: [],
  user: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "USERS": {
      return {
        ...state,
        usersList: action.payload
      };
    }
   case "USER": {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};
