import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./components/Map.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/:left/:top" component={Map} />
        </Switch>
      </Router>
    );
  }
}

export default App;
