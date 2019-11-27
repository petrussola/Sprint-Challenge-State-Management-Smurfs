import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// STATE
import * as reducers from "./state/reducers";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const masterReducer = combineReducers({
  village: reducers.villageReducer,
  newSmurf: reducers.newSmurfReducer,
  editMode: reducers.editModeReducer,
});

const store = createStore(
  masterReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
