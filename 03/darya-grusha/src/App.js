import React from "react";
import Table from "./Components/Table";
import Form from "./Components/Form";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
`;
class App extends React.Component {
  state = {
    carStorage: [],
    car: {
      brand: "",
      model: "",
      issueYear: "",
      price: "",
    },
  };
  handleSubmitClick = (carData) => {
    // console.log(this.state);
    this.setState((prevState) => ({
      carStorage: [...prevState.carStorage, carData],
      car: {
        brand: "",
        model: "",
        issueYear: "",
        price: "",
      },
    }));
  };
  handleTableClick = (carData) => {
    this.setState((prevState) => ({
      ...prevState,
      car: { ...carData },
    }));
  };
  render() {
    const { car, carStorage } = this.state;
    return (
      <Wrap>
        <Table
          carStorage={carStorage}
          handleTableClick={this.handleTableClick}
        />
        <Form data={car} handleSubmitClick={this.handleSubmitClick} />
      </Wrap>
    );
  }
}

export default App;
