const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "SIGNUP":
      return [...state, action.payload];
    case "SIGNIN":
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
