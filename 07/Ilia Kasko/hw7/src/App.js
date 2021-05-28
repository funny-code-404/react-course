import React from 'react';

import DataContext from "./context/DataContext";
import DataContextProvider from "./context/DataContextProvider";
import Data from "./components/Data";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Car from "./components/Car";

const App = () => {
  return (
      <Router>
          <Switch>
              <Route path="/" exact component={DataContextProvider} />
              <Route path='/:id' exact component={Car} />
          </Switch>
      </Router>
  );
}

export default App;
