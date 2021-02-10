import React from "react";

import Table from "./componets/Table";
import Form from "./componets/Form";

const names = {
  number: "number",
  name: "name",
  model: "model",
  year: "year",
  cost: "cost",
};

const titles = [
  { text: "№", id: 0, name: "number" },
  { text: "Марка", id: 1, name: "name" },
  { text: "Модель", id: 2, name: "model" },
  { text: "Год выпуска", id: 3, name: "year" },
  { text: "Цена", id: 4, name: "cost" },
];

class App extends React.Component {
  state = {
    data: [],
  };

  handleSubmit = (formData) => {
    this.setState((prevState) => {
      const newData = {
        ...formData,
        id: new Date().getTime(),
      };
      return {
        data: [...prevState.data, newData],
      };
    });
  };

  handleChange = (value, fieldName, id) => {
    this.setState((prevState) => {
      const index = prevState.data.findIndex((elem) => elem.id === +id);
      const updatedItem = { ...prevState.data[index], [fieldName]: value };

      return {
        data: [
          ...prevState.data.slice(0, index),
          updatedItem,
          ...prevState.data.slice(index + 1),
        ],
      };
    });
  };

  render() {
    return (
      <>
        <Table
          data={this.state.data}
          headerTitles={titles}
          handleChange={this.handleChange}
          names={names}
        />
        <Form titles={titles} handleSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default App;
