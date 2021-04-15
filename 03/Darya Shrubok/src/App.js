import React from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

class App extends React.Component {
  state = {
    data: [],
    row: {
      firstname: "",
      lastname: "",
      phone: "",
    },
  };

  handleClick = (row) => {
    this.setState((prevState) => ({
      data: [...prevState.data, row],
    }));
  };

  handleRowClick = (clickedRow) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        row: clickedRow,
      }),
      (prevState) => ({
        ...prevState,
        row: {
          firstname: "",
          lastname: "",
          phone: "",
        },
      })
    );
  };

  render() {
    return (
      <>
        <Form onClick={this.handleClick} row={this.state.row} />
        <Table data={this.state.data} onRowClick={this.handleRowClick} />
      </>
    );
  }
}

export default App;
