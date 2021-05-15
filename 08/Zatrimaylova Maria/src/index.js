import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import App from './App';

const container = document.getElementById('root');

ReactDOM.render(<App />, container);

debugContextDevtool(container, {});