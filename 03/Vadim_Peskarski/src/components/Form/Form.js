import React from 'react';
import styled from 'styled-components';

const FormField = styled.div`
  width: 400px;
  display: flex;
  border: 1px solid black;
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
      <FormField>
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
