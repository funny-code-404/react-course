import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main.js';
import Marker from './components/Marker/Marker.js';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/:x/:y" component ={Marker}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
