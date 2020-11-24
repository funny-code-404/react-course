//Core
import React, { Component } from "react";
import { sidebar } from "./evidence";
import { cards } from "./evidence";
import { SideBar } from "./components/SideBar";
import ListItem from "./components/ListItem";

//Style
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-header">
          <h1>Articles</h1>
          <SideBar data={sidebar} />
        </div>
        <div className="main-body">
          <ListItem cards={cards} />
        </div>
      </div>
    );
  }
}

export default App;
