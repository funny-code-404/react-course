import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { debugContextDevtool } from 'react-context-devtool';
import './index.css'
import SpinnerHome from './components/Spinner/index'
import AppWithBackgroundVideo from './assets/BackVideo'
import store from './store';

const container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <SpinnerHome/>
    <AppWithBackgroundVideo />
  </Provider>,
  container
);

debugContextDevtool(container, {});
