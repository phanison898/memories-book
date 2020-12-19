import uuid from "react-uuid";

export const IsEditButtonClicked = () => {
  const data = uuid();

  return {
    type: "IS_EDIT_BUTTON_CLICKED",
    payload: data,
  };
};

export const ToggleMenu = () => {
  const data = uuid();
  return {
    type: "TOGGLE_MENU",
    payload: { isMenuClicked: data },
  };
};
