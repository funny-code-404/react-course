import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App';
import store from "./redux";
import { ErrorBoundary } from "./components";


ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);