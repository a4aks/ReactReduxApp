import { createStore } from "redux";
import { reducer } from "./reducer";
import { initialState } from "./constant";

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()
);
