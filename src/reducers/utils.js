
// Posts Reducer
const utilReducer = (state = 1, action) => {
    switch (action.type) {
      case "IS_EDIT_BUTTON_CLICKED":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default utilReducer;
  