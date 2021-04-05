import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { debugContextDevtool } from "react-context-devtool";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App.jsx";

import store from "./store";

const container = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  container
);

debugContextDevtool(container, {});
