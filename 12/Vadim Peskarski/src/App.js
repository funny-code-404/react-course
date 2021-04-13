import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Civilizations from './components/Civilizations/Civilizations';
import CivilizationItem from './components/Civilizations/CivilizationItem/CivilizationItem'
import Units from './components/Units/Units';
import UnitItem from './components/Units/UnitItem/UnitItem';
import Structures from './components/Structures/Structures';
import StructureItem from './components/Structures/StructureItem/StructureItem';
import Techs from './components/Techs/Techs';
import TechItem from './components/Techs/TechItem/TechItem'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Main />
          <Switch>
            <Route path="/civilizations" exact component={Civilizations} />
            <Route path="/civilizations/:id" component={CivilizationItem} />
            <Route path="/units" exact component={Units} />
            <Route path="/units/:id" component={UnitItem} />
            <Route path="/structures" exact component={Structures} />
            <Route path="/structures/:id" component={StructureItem} />
            <Route path="/technologies" exact component={Techs} />
            <Route path="/technologies/:id" component={TechItem} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
