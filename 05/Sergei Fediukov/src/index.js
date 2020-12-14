import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import App from './App';


ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);

