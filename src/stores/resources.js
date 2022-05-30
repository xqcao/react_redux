import { combineReducers } from "redux";

import countReduce from "./count/count_reduce";
import todoReduce from "./todo/todo_reduce";
export default combineReducers({
  countReduce,
  todoReduce,
});
