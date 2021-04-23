import React from "react";
import styled from "styled-components";

const FormField = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 2px black solid;
  align-self: start;
`;
const Button = styled.button`
  background-color: black;
  color: #ffc919;
  border: none;
  height: 40px;
  font-size: 30px;
  cursor: pointer;
`;
const Input = styled.input`
  height: 30px;
  font-size: 20px;
  border: black solid 1px;
`;
class Form extends React.Component {
  state = {
    car: { brand: "", model: "", issueYear: "", price: "" },
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      car: { ...prevState.car, [name]: value },
    }));
  };
  handleClick = (e) => {
    e.preventDefault();
    const { car } = this.state;
    if (car.brand && car.model && car.issueYear && car.price) {
      const { handleSubmitClick } = this.props;
      handleSubmitClick(car);
      this.setState({
        car: { brand: "", model: "", issueYear: "", price: "" },
      });
    } else {
      alert("Заполните все поля!");
    }
  };
  render() {
    const { brand, model, issueYear, price } = this.state.car;
    const { brandPr, modelPr, issueYearPr, pricePr } = this.props.data;
    return (
      <FormField>
        <Input
          onChange={this.handleChange}
          placeholder="Brand"
          value={brand || brandPr || ""}
          name="brand"
        ></Input>
        <Input
          onChange={this.handleChange}
          placeholder="Model"
          value={model || modelPr || ""}
          name="model"
        ></Input>
        <Input
          onChange={this.handleChange}
          placeholder="Issue Year"
          value={issueYear || issueYearPr || ""}
          name="issueYear"
        ></Input>
        <Input
          onChange={this.handleChange}
          placeholder="Price"
          value={price || pricePr || ""}
          name="price"
        ></Input>
        <Button onClick={this.handleClick}>Добавить</Button>
      </FormField>
    );
  }
}
export default Form;
