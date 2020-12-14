import { combineReducers } from "redux";

const getData = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  posts: getData,
});
