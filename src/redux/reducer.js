import action from "./action";
import { combineReducers } from "redux";
const initalState = 10;
const changeNum = (state = initalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  changeNum: changeNum,
});
export default rootReducer;
