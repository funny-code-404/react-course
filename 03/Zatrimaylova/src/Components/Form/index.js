import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px;
  width: 100px;
  margin: auto;
  background-color: antiquewhite;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 30px;
`;

const Input = styled.input`
  width: 100px;
  outline: none;
  border-radius: 5px;
  margin: 10px;
`;

const FormEl = styled.div`
  border-radius: 5px;
  margin: 10px;
`;

class Form extends React.Component {
    state = {
        cars: {
            brand: '',
            model: '',
            year: '',
            price: ''
        },
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            ...prevState,
            cars: {
                ...prevState.cars,
                [name]: value,
            }
        }))
    }

    handleClick = () => {
        const { onChange } = this.props;
        onChange(this.state.cars);
    }

    render() {
        const { brand, model, year, price } = this.state;
        return (
            <FormEl>
                <Input name="brand" value={brand} onChange={this.handleChange} placeholder="Марка" />
                <Input name="model" value={model} onChange={this.handleChange} placeholder="Модель" />
                <Input name="year" value={year} onChange={this.handleChange} placeholder="Год выпуска" />                   
                <Input name="price" value={price} onChange={this.handleChange} placeholder="Цена" />
                <Button onClick={this.handleClick}>Click</Button>
            </FormEl>
        )
    }
}

export default Form; 