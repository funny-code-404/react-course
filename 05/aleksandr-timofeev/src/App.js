import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";
import Map from './components/map';
import Info from './components/info';
import Contacts from './components/contacts';


class App extends React.Component {

  render(){
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/map/0/0'>Map</Link>
          <Link to='/info'>Info</Link>
          <Link to='/contacts'>Contacts</Link>
        </nav>
        <Switch>
          <Route path='/map/:id/:uuid' exact component={ Map } />
          <Route path='/info' exact component={ Info } />
          <Route path='/contacts' exact component={ Contacts } />
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
