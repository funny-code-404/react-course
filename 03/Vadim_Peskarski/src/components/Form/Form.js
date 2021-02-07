import React from 'react';
import styled from 'styled-components';

const FormField = styled.div`
  width: 400px;
  display: flex;
  border: ${props => props.valid ? '1px solid black' : '2px solid red'};
  flex-direction: column;
  padding: 8px;
  margin: 8px auto 0px 8px;
`;

const FormInput = styled.input`
  border: 1px solid grey;
  border-radius: 4px;
  height: 40px;
  margin-bottom: 8px;
  font-size: 16px;
`;

const FormButton = styled.button`
  width: 100px;
  background-color: rgb(154, 166, 230);
  height: 32px;
  margin-left: auto;
  font-weight: bold;
  border-radius: 4px;
`

export class Form extends React.Component {
  state = {
    cars: {
      mark: '',
      model: '',
      year: '',
      price: ''
    },
    validation: true
  }

  handleChange = (e) => {
    this.setState(prevState => ({
      cars: {
        ...prevState.cars,
        [e.target.name]: e.target.value
      }
    }));
  }

  handleClick = () => {
    const { cars } = this.state;

    this.setState(prevState => ({
      ...prevState.cars,
      validation: this.checkValidity()
    }), () => {
      if (this.state.validation) {
        const { onClick } = this.props;
        onClick(cars);
        this.setState({
          cars: {
            mark: '',
            model: '',
            year: '',
            price: ''
          },
          validation: true
        });
      }
    })
  }

  checkValidity() {
    const { cars } = this.state;
    let counter = 0;
    for (let key in cars) {
      if (cars[key] !== '') {
       counter++;
      }
    }
    return counter === 4 ? true : false;
  }

  render() {
    const { mark, model, year, price } = this.state.cars;
    return (
      <FormField valid={this.state.validation}>
        <FormInput onChange={this.handleChange} value={mark} name="mark" placeholder="Марка">
        </FormInput>
        <FormInput onChange={this.handleChange} value={model} name="model" placeholder="Модель">
        </FormInput>
        <FormInput onChange={this.handleChange} value={year} name="year" placeholder="Год выпуска"></FormInput>
        <FormInput onChange={this.handleChange} value={price} name="price" placeholder="Цена">
        </FormInput>
        <FormButton onClick={this.handleClick}>Добавить</FormButton>
      </FormField>
    )
  }
}

export default Form;
