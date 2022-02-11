import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Form extends React.Component {
  state = {
    brand: "",
    model: "",
    volume: "",
    year: "",
    price: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleClick = (e) => {
    e.preventDefault();
    const { brand, model, volume, year, price } = this.state;
    if (brand && model && volume && year && price) {
      this.props.onClick(this.state);
      this.setState((prevState) => ({
        ...prevState,
        brand: "",
        model: "",
        volume: "",
        year: "",
        price: "",
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
      }));
    }
  };

  componentDidUpdate(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState(this.props.data);
      return true;
    }
    return false;
  }

  render() {
    const { brand, model, volume, year, price } = this.state;

    return (
      <form onSubmit={this.handleClick}>
        <div className="w-75 d-grid gap-2 d-md-flex justify-content-md-end">
          <input
            className="form-control"
            onChange={this.handleChange}
            value={brand}
            name="brand"
            placeholder="Марка"
          ></input>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={model}
            name="model"
            placeholder="Модель"
          ></input>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={volume}
            name="volume"
            placeholder="Объем"
          ></input>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={year}
            name="year"
            placeholder="Год выпуска"
          ></input>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={price}
            name="price"
            placeholder="Цена"
          ></input>
          <button className="btn btn-outline-secondary" type="submit">
            Добавить
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
