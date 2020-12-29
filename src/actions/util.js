export const ChangeTheme = (condition) => async (dispatch) => {
  dispatch({
    type: "THEME",
    payload: {
      theme: condition,
    },
  });
};
