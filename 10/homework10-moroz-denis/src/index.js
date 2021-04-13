import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux';

import App from './App';
import { Civilizations } from './pages/Civilizations';
import { Units } from './pages/Units';
import { HomePage } from './pages/HomePage';
import { Structures } from './pages/Structures';
import { CivilizationInfo } from './pages/CivilizationInfo';
import { StructureInfo } from './pages/StructureInfo';
import { UnitInfo } from './pages/UnitInfo';
import { Technologies } from './pages/Technologies'; 
import { TechnologyInfo } from './pages/TechnologyInfo';


ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <Switch>
        <App>
          <Route path = '/' exact component = {HomePage}/>
          <Route path = '/civilizations' exact component = {Civilizations}/>
          <Route path = '/civilization/:id' component = {CivilizationInfo}/>
          <Route path = '/units' exact component = {Units}/>
          <Route path = '/unit/:id' component = {UnitInfo}/>
          <Route path = '/structures' exact component = {Structures}/>
          <Route path = '/structure/:id' component = {StructureInfo}/>
          <Route path = '/technologies' exact component = {Technologies}/>
          <Route path = '/technology/:id' component = {TechnologyInfo}/>
        </App>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

