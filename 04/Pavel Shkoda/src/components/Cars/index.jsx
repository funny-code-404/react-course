import React from "react";
import Table from "../Table";
import Form from "../Form";

class Cars extends React.Component {
  state = {
    cars: [],
    data: [],
  };

  onClick = (data) => {
    this.setState((prevState) => ({
      cars: [...prevState.cars, data],
      data: {
        brand: "",
        model: "",
        volume: "",
        year: "",
        price: "",
      },
    }));
  };

  onTableClick = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      data: prevState.cars[id],
    }));
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <Table data={this.state} onTableClick={this.onTableClick} />
        <Form data={data} onClick={this.onClick} />
      </div>
    );
  }
}

export default Cars;
