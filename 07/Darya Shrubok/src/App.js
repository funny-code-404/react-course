import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataContextProvider from "./context/DataContextProvider";
import Data from "./components/Data";
import DataInfo from "./components/DataInfo";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <DataContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Data} />
            <Route path="/:id" exact component={DataInfo} />
          </Switch>
        </Router>
      </DataContextProvider>
    );
  }
}

export default App;
