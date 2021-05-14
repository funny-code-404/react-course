import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CarList from "./components/CarList";
import CarInfo from "./components/CarInfo";
import DataContextProvider from "./components/Context/dataContextProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataContextProvider>
          <Router>
            <Route path="/" component={CarList}></Route>
            <Route path="/:id" component={CarInfo}></Route>
          </Router>
        </DataContextProvider>
      </div>
    );
  }
}

export default App;
