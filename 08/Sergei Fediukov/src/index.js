import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <App />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

