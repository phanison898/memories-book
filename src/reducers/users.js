const initialState = {
  status: undefined,
  message: "",
  token: "",
  user: undefined,
  name: "",
  email: "",
};

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP":
      return action.payload;
    case "LOGIN":
      return action.payload;
    case "GET_USER":
      return { ...state, name: action.payload.name, email: action.payload.email };
    default:
      return state;
  }
};

export default usersReducer;
