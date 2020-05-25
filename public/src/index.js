import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./store/store.js";
import { Provider } from "react-redux";


var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}><App name="where-to-next" /></Provider>
  , mountNode);