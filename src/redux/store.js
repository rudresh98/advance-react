import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
