import React, { Component } from "react";
import Table from "./components/Table";
import Form from "./components/Form";

import "./App.css";
import config from "./config";

class App extends Component {
  state = {
    dataTable: config.cars,
    dataForm: null,
  };

  onClickForm = (dataForm) => {
    const data = this.state.dataForm || dataForm;

    this.setState((prevState) => ({
      ...prevState,
      dataTable: [...prevState.dataTable, data],
      dataForm: null,
    }));
  };

  onClickLine = (dataForm) => {
    this.setState((prevState) => ({
      ...prevState,
      dataForm,
      errors: {},
    }));
  };

  render() {
    return (
      <div className="App">
        <Table headers={config.headers}>
          {this.state.dataTable.map((data, index) => (
            <Table.Item
              key={`tableLine${index}`}
              id={index}
              dataTable={this.state.dataTable}
              dataLine={data}
              onClick={this.onClickLine}
            />
          ))}
        </Table>
        <Form
          inputs={config.inputs}
          onClick={this.onClickForm}
          dataForm={this.state.dataForm}
        />
      </div>
    );
  }
}

export default App;
