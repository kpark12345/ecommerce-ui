import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers/index";

const store = createStore(
  rootReducers,
  { entry: "this is to preload state and can be left blank" },
  applyMiddleware(thunk)
);

export default store;