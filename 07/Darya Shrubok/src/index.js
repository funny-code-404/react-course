import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {debugContextDevtool} from "react-context-devtool";

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

debugContextDevtool(root, {});
