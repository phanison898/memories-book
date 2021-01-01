const initialState = {
  theme: false,
};
const utilReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEME":
      return action.payload;
    case "CLEAR_THEME":
      return initialState;
    default:
      return state;
  }
};

export default utilReducer;
