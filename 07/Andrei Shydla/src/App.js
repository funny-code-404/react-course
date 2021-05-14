import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DataContextProvider from "./context/DataContextProvider";

import CarsListConsumer from "./components/CarsListConsumer";
import CarInfoConsumer from "./components/CarInfoConsumer";

import "./style.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <DataContextProvider>
          <Link
            to={{
              pathname: `/cars-list`,
            }}
          >
            Cars list
          </Link>

          <Switch>
            <Route path="/cars-list" exact component={CarsListConsumer} />
            <Route path="/cars-list/:id/" exact component={CarInfoConsumer} />
          </Switch>
        </DataContextProvider>
      </Router>
    );
  }
}

export default App;
