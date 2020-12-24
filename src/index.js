import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducer from "./reducers";
import "./style.css";

//axios.defaults.headers["auth-token"] = localStorage.getItem("auth-token");

// R E D U X  <--->  S T O R E
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// R E D U X  <--->  S T O R E

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
