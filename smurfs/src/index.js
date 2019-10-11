import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// STATE
import * as reducers from "./state/reducers";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const masterReducer = combineReducers({
  count: reducers.countReducer,
  village: reducers.villageReducer,
  newSmurfReducer: reducers.newSmurfReducer
});

const store = createStore(
  masterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
