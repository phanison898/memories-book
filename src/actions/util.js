export const ChangeTheme = (condition) => async (dispatch) => {
  window.localStorage.setItem("dark-mode", condition);
  dispatch({
    type: "THEME",
    payload: {
      theme: condition,
    },
  });
};

export const clearTheme = () => async (dispatch) => {
  dispatch({ type: "CLEAR_THEME" });
};
