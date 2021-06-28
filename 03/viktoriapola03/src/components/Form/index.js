import React from 'react';
import * as constants from '../../constants';
import styled from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  max-width: 300px;
  margin-top: 20px;
  margin-left: 50px;
`;

const InputStyle = styled.input`
  max-width: 200px;
  margin-bottom: 10px;
`;

const ButtonStyle = styled.button`
  max-width: 100px;
`;

class Form extends React.Component {
  
  state = {
    cars: {
      [constants.car]: '',
      [constants.model]: '',
      [constants.year]: '',
      [constants.price]: '',
    },
  };

  hendleChange = (e) => {
    const key = e.target.name;
    const inputValue = e.target.value;

    this.setState((prevState) => ({
      ...prevState,
      cars: {
        ...prevState.cars,
        [key]: inputValue,
      }
    }));
  };

  hendleClick = (e) => {
    e.preventDefault();
    const { car, model, year, price } = this.state.cars
    const { onChange } = this.props;
    
    if(!car || !model || !year || !price) {
      alert('Поля обязательны для заполнения!');
    } else {
      onChange(this.state.cars);
    }
    this.setState({
      cars: {
        car: "",
        model: "",
        year: "",
        price: "",
      }
    });
  };

  inputsValueFromTable = () => {
    const { car, model, year, price } = this.props.dataInputs;
      if(car || model || year || price) {
        this.setState({
          cars: {
            car: car.value,
            model: model.value,
            year: year.value,
            price: price.value,
          }
        });
      };
  };


  render() {

    const { car, model, year, price } = this.state.cars;
    const { data, dataInputs } = this.props;

    return (
        <>
          <FormStyle> 
          <InputStyle type="text" value={car || data.car || dataInputs.car} placeholder="Марка" name={constants.car} onChange={this.hendleChange} />
          <InputStyle type="text" value={model || data.model || dataInputs.model} placeholder="Модель" name={constants.model} onChange={this.hendleChange} />
          <InputStyle type="text" value={year || data.year || dataInputs.year} placeholder="Год выпуска" name={constants.year} onChange={this.hendleChange} />
          <InputStyle type="text" value={price || data.price || dataInputs.price} placeholder="Цена" name={constants.price} onChange={this.hendleChange} />
          <ButtonStyle onClick={this.hendleClick} >Добавить</ButtonStyle>
          </FormStyle>
        </>
    );
  };
};


export default Form;