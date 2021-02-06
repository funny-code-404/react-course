import React from 'react';
import './Form.css';

export class Form extends React.Component {
  state = {
    mark: '',
    model: '',
    year: '',
    price: ''
  }

  handleChange = (e) => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      mark: '',
      model: '',
      year: '',
      price: ''
    })
  }

  render() {
    const { mark, model, year, price } = this.state;

    return (
      <div>
        <input onChange={this.handleChange} value={mark} name="mark" placeholder="Марка"></input>
        <input onChange={this.handleChange} value={model} name="model" placeholder="Модель"></input>
        <input onChange={this.handleChange} value={year} name="year" placeholder="Год выпуска"></input>
        <input onChange={this.handleChange} value={price} name="price" placeholder="Цена"></input>
        <button onClick={this.handleClick}>Добавить</button>
      </div>
    )
  }
}

export default Form;
