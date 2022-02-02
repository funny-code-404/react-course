import React from "react";
import DataList from "../List";
import "./style.css";
import Table from "../Table";
import Form from "../Form";

class Main extends React.Component {
  state = {
    brand: "",
    model: "",
    year: "",
    price: "",
    items: [],
    error: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let items = [...this.state.items];
    items.push({
      brand: this.state.brand,
      model: this.state.model,
      year: this.state.year,
      price: this.state.price,
    });

    this.setState({
      items,
      brand: "",
      model: "",
      year: "",
      price: "",
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <DataList />
        <Table
          items={this.state.items}
          handleRowDelete={this.handleRowDelete}
        />
        <Form
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          newBrand={this.state.brand}
          newModel={this.state.model}
          newYear={this.state.year}
          newPrice={this.state.price}
        />
      </div>
    );
  }
}

export default Main;
