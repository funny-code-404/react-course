import React from "react";
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
      <form>
        <input
          onChange={this.handleChange}
          placeholder="Марка"
          value={brand || brandPr || ""}
          name="brand"
        ></input>
        <input
          onChange={this.handleChange}
          placeholder="Модель"
          value={model || modelPr || ""}
          name="model"
        ></input>
        <input
          onChange={this.handleChange}
          placeholder="Год выпуска"
          value={issueYear || issueYearPr || ""}
          name="issueYear"
        ></input>
        <input
          onChange={this.handleChange}
          placeholder="Цена"
          value={price || pricePr || ""}
          name="price"
        ></input>
        <button onClick={this.handleClick}>Добавить</button>
      </form>
    );
  }
}
export default Form;
