import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

import * as serviceWorker from "./serviceWorker";
import App from "./LoginORHomePage/App";
// Reduxxxx
import { Provider } from "react-redux";
import { store } from "./Redux/store";
//Mutilg
import "./i18next/i18next";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
