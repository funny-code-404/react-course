import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { debugContextDevtool } from 'react-context-devtool'

import App from './components/App';
import './index.css';

const container = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Switch>
      <App />
    </Switch>
  </Router>, container)

debugContextDevtool(container, {})

