import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import App from './App';
import HomePage from './pages/HomePage'
import DogRandomPhoto from './pages/DogRandomPhoto'
import store from './store'


ReactDOM.render(
 <Provider store = {store}>
    <Router>
      <Switch>
        <App>
          <Route path = '/' exact component = {HomePage}/>
          <Route path = '/dog/:breed' component = {DogRandomPhoto}/>
        </App>
      </Switch>
         
    </Router>
  </Provider>,  
  document.getElementById('root')
);
