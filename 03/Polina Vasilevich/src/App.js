import React, { Component } from "react";
import Table from "./components/Table";
import Form from "./components/Form";

import "./App.css";
import config from "./config";

class App extends Component {
  state = {
    dataTable: config.cars,
    dataForm: {},
    errors: {},
  };

  validateForm() {
    const { dataForm } = this.state;
    const errors = {};

    config.inputs.map(({ name }) => {
      if (!dataForm[name]) {
        errors[name] = `Please enter ${name}`;
      }
    });

    this.setState((prevState) => ({
      ...prevState,
      errors,
    }));

    return !Object.keys(errors).length;
  }

  clearForm() {
    const dataForm = {};

    config.inputs.map(({ name }) => (dataForm[name] = ""));

    this.setState((prevState) => ({
      ...prevState,
      dataForm,
    }));
  }

  handleChange = (e) => {
    const { errors } = this.state;
    const { name, value } = e.target;

    if (errors[name]) {
      errors[name] = "";
    }

    this.setState((prevState) => ({
      ...prevState,
      dataForm: {
        ...prevState.dataForm,
        [name]: value,
      },
      errors,
    }));
  };

  handleClick = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState((prevState) => ({
        ...prevState,
        dataTable: [...prevState.dataTable, this.state.dataForm],
      }));

      this.clearForm();
    }
  };

  handleClickLine = (e) => {
    const { dataTable } = this.state;
    const dataForm = dataTable[e.currentTarget.id];

    this.setState((prevState) => ({
      ...prevState,
      dataForm,
      errors: {},
    }));
  };

  render() {
    return (
      <div className="App">
        <Table {...config.fields}>
          {this.state.dataTable.map((data, index) => (
            <Table.Item
              id={index}
              dataLine={data}
              handleClickLine={this.handleClickLine}
            />
          ))}
        </Table>
        <Form
          inputs={config.inputs}
          onChange={this.handleChange}
          onClick={this.handleClick}
          errors={this.state.errors}
          dataForm={this.state.dataForm}
        />
      </div>
    );
  }
}

export default App;
