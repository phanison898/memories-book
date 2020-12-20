import * as api from "../api";

export const SignUp = (signUpData) => async (dispatch) => {
  try {
    const { data } = await api.SignUp(signUpData);
    dispatch({ type: "SIGNUP", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const SignIn = (signInData) => async (dispatch) => {
  let responseData;
  try {
    const { data } = await api.SignIn(signInData);
    responseData = data;
  } catch (error) {
    responseData = error.response.data;
  }
  dispatch({ type: "SIGNIN", payload: responseData });
};
