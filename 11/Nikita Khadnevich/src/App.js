import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home';

import Civil from './components/Civil/Civil';
import CivInfo from './components/Civil/CivInfo';

import Units from './components/Units/Units';
import UnitSkill from './components/Units/UnitSkil';

import Structure from './components/Structure/Structure';
import StructureInfo from './components/Structure/StructureInfo';

import Technologies from './components/Technologies/Technologies'
import TechInfo from './components/Technologies/TechInfo'

const App = (props) => {
  return (
    <>
      <Router>
        <div className='Posts'>
          <div className='navigation'>
            <Link to='/'>К истокам</Link>
            <Link to='/civilizations' data-path='/civilizations'>Цивилизации</Link>
            <Link to='/units'data-path='/units'>Юниты</Link>
            <Link to='/structures'data-path='/structures'>Сооружения</Link>
            <Link to='/technologies'data-path='/technologies'>Технологии</Link>
          </div>
          <Switch> 
              <Route exact path='/' component={Home} />

              <Route exact path='/civilizations' component={Civil} />
              <Route path='/civilizations/:id/' component={CivInfo} />
  
              <Route exact path='/units' component={Units} />
              <Route path='/units/:id' component={UnitSkill} />

              <Route exact path='/structures' component={Structure} />
              <Route exact path='/structures/:id' component={StructureInfo} />

              <Route exact path='/technologies' component={Technologies} />
              <Route exact path='/technologies/:id/' component={TechInfo} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
