import { combineReducers } from "redux";
import toast from "./reducers/toast";
import counter from "./reducers/counter";

export default combineReducers({
  toast,
  counter,
});
