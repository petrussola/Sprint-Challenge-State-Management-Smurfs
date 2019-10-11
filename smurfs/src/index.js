import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// STATE
import * as reducers from "./state/reducers";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const masterReducer = combineReducers({
  count: reducers.countReducer
});

const store = createStore(masterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
