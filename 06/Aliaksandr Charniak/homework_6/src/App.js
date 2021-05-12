import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Contacts from './components/Contacts'
import ContactInfo from './components/ContactInfo'
import ContactNumber from './components/ContactNumber'
import LatestNumbers from './components/LatestNumbers'
import './styles.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navigation">
          <Link
            to={{
              pathname: '/contacts',
              state: {
                showNames: true,
              },
            }}
          >
            Имена
          </Link>
          <Link to="/numbers">Номера телефонов</Link>
        </nav>
        <Switch>
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/numbers" exact component={Contacts} />
          <Route path="/contacts/:name" exact component={ContactInfo} />
          <Route path="/contacts/:name/:number" exact component={ContactNumber} />
          <Route path="/contacts/:name/:number/latestcalls" exact component={LatestNumbers} />
        </Switch>
      </Router>
    )
  }
}

export default App
