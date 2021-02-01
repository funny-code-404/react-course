import React from 'react';
import store from './redux'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <Switch>
          <App />
        </Switch>
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
