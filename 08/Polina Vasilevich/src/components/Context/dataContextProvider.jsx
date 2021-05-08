import React, { Component } from "react";
import DataContext from "./dataContext.jsx";

class DataContextProvider extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch(
      "https://private-anon-928e6d58e3-carsapi1.apiary-mock.com/manufacturers"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <DataContext.Provider value={this.state.data}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
