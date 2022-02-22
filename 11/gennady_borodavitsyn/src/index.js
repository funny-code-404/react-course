import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import App from './App';

import './index.css';

ReactDOM.render(
  <Provider const store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
