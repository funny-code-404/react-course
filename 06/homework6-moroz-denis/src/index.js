import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './App';

import {HomePage, Civilizations, Units, Structures, Technologies, UnitsInfo, NotFound, TechnologyInfo, StructureInfo, CivilizationInfo } from './pages'

ReactDOM.render(
  <Router>
    <Switch>
      <App>
        <Route path = '/' exact component = {HomePage}/>
        <Route path = '/civilizations' component = {Civilizations}/>
        <Route path = '/civilization/:id' component = {CivilizationInfo}/>
        <Route path = '/units' exact component = {Units}/>
        <Route path = '/unit/:id' component = {UnitsInfo}/>
        <Route path = '/structures' exact component = {Structures}/>
        <Route path = '/structure/:id' component = {StructureInfo}/>
        <Route path = '/technologies' exact component = {Technologies}/>
        <Route path = '/technology/:id' component = {TechnologyInfo}/>
        <Route component = {NotFound}/>
      </App>
    </Switch>
  </Router>, document.getElementById('root')
);
