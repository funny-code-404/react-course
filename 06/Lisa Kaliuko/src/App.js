import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

import phoneBook from "./constants";
import NamePage from "./NamePage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          {phoneBook.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/${item.name}`} key={item.name}>
                  {item.name}
                </Link>
                <Link to={`/${item.number}`} key={item.id}>
                  {item.number}
                </Link>
              </div>
            );
          })}
        </nav>
        <Switch>
          <Route path="/:param" exact component={NamePage} />;
        </Switch>
      </Router>
    );
  }
}

export default App;
