import { combineReducers } from "redux";
import toast from "./reducers/toast";
import posts from "./reducers/posts";

export default combineReducers({
  toast,
  posts,
});
