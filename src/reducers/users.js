const initialState = {
  login: {
    status: false,
    message: "",
  },
  userDetails: {
    email: "",
    name: "",
  },
  switch: {
    status: "",
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, login: action.payload.login, switch: action.payload.switch };
    case "LOGIN":
      return { ...state, login: action.payload.login, switch: action.payload.switch };
    case "GET_USER":
      return { ...state, userDetails: action.payload };
    case "LOGOUT":
      return { ...state, switch: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
