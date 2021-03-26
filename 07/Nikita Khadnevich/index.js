import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import AppContext from './Home/AppContext'

const container = document.getElementById("root");
debugContextDevtool(container, {});

ReactDOM.render(
  <React.StrictMode>
    <AppContext />
  </React.StrictMode>,
  container
);

