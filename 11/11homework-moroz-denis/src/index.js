import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store';
import { HomePage } from './pages/HomePage';
import { DogInfoPage } from './pages/DogInfoPage';


import App from './App';

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <Switch>
        <App>
          <Route path = '/' exact component = {HomePage}/>
          <Route path = '/dog/:breed' component = {DogInfoPage}/>
        </App>   
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
