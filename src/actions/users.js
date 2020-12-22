import * as api from "../api";

export const SignUp = (signUpData) => async (dispatch) => {
  try {
    let responseData;
    try {
      const { data } = await api.SignUp(signUpData);
      responseData = await data;
    } catch (error) {
      responseData = await error.response.data;
    }
    window.localStorage.setItem("auth-token", responseData.token);
    dispatch({ type: "SIGNUP", payload: responseData });
  } catch (error) {
    console.log(error.message);
  }
};

export const Login = (loginData) => async (dispatch) => {
  try {
    let responseData;
    try {
      const { data } = await api.SignIn(loginData);
      responseData = await data;
    } catch (error) {
      responseData = await error.response.data;
    }
    window.localStorage.setItem("auth-token", responseData.token);
    dispatch({ type: "LOGIN", payload: responseData });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetUser = () => async (dispatch) => {
  try {
    const { data } = await api.GetUser();
    dispatch({ type: "GET_USER", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const Logout = () => async (dispatch) => {
  const data = {
    status: undefined,
    message: "",
    token: "",
    user: undefined,
    name: "",
    email: "",
  };

  try {
    dispatch({ type: "LOGOUT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
