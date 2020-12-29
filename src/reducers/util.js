const initialState = {
  theme: false,
};
const utilReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEME":
      return action.payload;
    default:
      return state;
  }
};

export default utilReducer;
