import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { debugContextDevtool } from 'react-context-devtool';
import './index.css'

import App from './App';
import store from './store';

const container = document.getElementById('root');

console.log('store', store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);

debugContextDevtool(container, {});
