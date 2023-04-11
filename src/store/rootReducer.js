import { combineReducers } from "redux";
import toast from "./reducers/toast";
import posts from "./reducers/posts";
import stories from "./reducers/stories";
import user from "./reducers/user";

export default combineReducers({
  toast,
  posts,
  stories,
  user,
});
