import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from './Components/Map';
import Targetpage from './Components/Targetpage';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact component={Map} />
            <Route path='/:x/:y' component={Targetpage}/>
          </Switch>
        </Router>
    )
  }
}

export default App;