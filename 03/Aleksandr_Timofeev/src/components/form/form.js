import React from 'react';
import './style.css'

class Form extends React.Component{
  state = {
    data:{
      id:'',
      brand:'',
      model:'',
      year:'',
      price:'',
    },
    validate:{
      validateForm : true,
    },
  }

  sendData = (event) => {
    event.preventDefault();
    const {brand, model, year, price} = this.state.data;
    if (brand && model && year && price){

      this.props.addPosition(this.state.data)     // отправка данных формы в App
      this.setState(                         // очистка формы
      {data:{
        id: '',
        brand:'',
        model:'',
        year:'',
        price:'',
      }
    })} else {
      this.setState({
        validate:{validateForm: !this.state.validate.validateForm}
      }
      )
    }
  }

  validateClose = () =>{          // скрыть сообщение валидации
    this.setState({
      validate:{validateForm: true}
    })
  }

  inputChange = (event) => {
    this.setState(prevState => (
      {
        data:{
        ...prevState.data,
        id : new Date().getTime(),
        [event.target.name] : event.target.value
      }}
    )
    )
  }



  render(){

    const {brand, model, year, price} = this.state.data;

    return(
    <div className="wrapper-form">
      <form onFocus={this.validateClose}>
        <label htmlFor="brand">
          <input id="brand" name="brand" placeholder="brand" value={brand}
          onInput={this.inputChange} />
        </label>
        <label htmlFor="model">
          <input id="model" name="model" placeholder="model" value={model}
          onInput={this.inputChange} />
        </label>
        <label htmlFor="year">
          <input id="year" name="year" placeholder="year" value={year}
          onInput={this.inputChange} />
        </label>
        <label htmlFor="price">
          <input id="price" name="price" placeholder="price" value={price}
          onInput={this.inputChange} />
        </label>
        <div className="validate-message">
          {this.state.validate.validateForm ? '' : 'Все поля должны быть заполнены'}
        </div>
        <button onClick={this.sendData}>Добавить</button>
      </form>
    </div>
  )}
}

export default Form;
