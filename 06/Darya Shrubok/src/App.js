import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import Contacts from "./components/Contacts";
import ContactInfo from "./components/ContactInfo";
import ContactPhone from "./components/ContactPhone";
import LatestCalls from "./components/LatestCalls";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <nav className="navigation">
            <Link to="/names">Names</Link>
            <Link to="/phones">Phones</Link>
          </nav>
        </div>
        <Switch>
          <Route path="/:type" exact component={Contacts} />
          <Route path="/:type/:name" exact component={ContactInfo} />
          <Route path="/:type/:name/:phone" exact component={ContactPhone} />
          <Route
            path="/:type/:name/:phone/calls"
            exact
            component={LatestCalls}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
