import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Civilizations from './components/Civilizations'
import Units from './components/Units'
import Structures from './components/Structures'
import Technologies from './components/Technologies'

import './styles.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navigation">
          <Link to="/civilizations">Цивилизации</Link>
          <Link to="/units">Юниты</Link>
          <Link to="/structures">Структуры</Link>
          <Link to="/technologies">Технологии</Link>
        </nav>
        <Switch>
          <Route path="/civilizations" exact component={Civilizations} />
          <Route path="/civilizations/:id/unique_unit/:unit_name" exact component={Units} />
          <Route path="/civilizations/:id/unique_tech/:tech_name" exact component={Technologies} />
          <Route path="/units" exact component={Units} />
          <Route path="/units/:id/created_in/:created_in" exact component={Structures} />
          <Route path="/structures" exact component={Structures} />
          <Route path="/technologies" exact component={Technologies} />
          <Route path="/technologies/:id/develops_in/:created_in" exact component={Structures} />
          <Route path="/technologies/:id/applies_to/unit/:unit_name" exact component={Units} />
          <Route
            path="/technologies/:id/applies_to/civilization/:unit_name"
            exact
            component={Civilizations}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
