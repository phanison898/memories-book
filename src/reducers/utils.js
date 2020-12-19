const initialState = {
  isMenuClicked: 1,
  isEditButtonClicked: 1,
};

const utilReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_EDIT_BUTTON_CLICKED":
      return action.payload;
    case "TOGGLE_MENU":
      return action.payload;
    default:
      return state;
  }
};

export default utilReducer;
