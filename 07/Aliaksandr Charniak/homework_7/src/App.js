import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import DataContextProvider from './context/DataContextProvider'
import CarInfo from './components/CarInfo'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={DataContextProvider} />
          <Route path="/car/:id" exact component={CarInfo} />
        </Switch>
      </Router>
    )
  }
}

export default App
