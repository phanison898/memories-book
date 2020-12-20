import { combineReducers } from "redux";
import postsReducer from "./posts";
import utilReducer from "./utils";
import usersReducer from "./users";

export default combineReducers({
  posts: postsReducer,
  utils: utilReducer,
  users: usersReducer,
});
