import { combineReducers } from "redux";
import postsReducer from "./posts";
import usersReducer from "./users";
import utilReducer from "./util";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  util: utilReducer,
});
