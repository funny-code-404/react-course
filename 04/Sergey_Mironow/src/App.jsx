import React from 'react';
import './App.scss';
import Table from './Components/Table/Table';
import Form from './Components/Form/Form';
import Posts from './Components/Posts/Posts';

class App extends React.Component {
  state = {
    cars: [
      
    ],

    inputVal: {
      brand: '',
      model: '',
      year: '',
      price: '',
    },
  }

  takeInputValfromTable = (inputVal) => {
    this.setState((prevState) => ({
      ...prevState,
      inputVal: {
        ...inputVal,
      }

    }))
  }

  sendCar = (car) => {
    this.setState((prevState) => ({
      ...prevState,
      cars: prevState.cars.concat(car)
    }))
  }

  render(){
    return (
      <div className="App">
        <Table cars = {this.state.cars} lineClick = {this.takeInputValfromTable}/>
        <Form sendCar = {this.sendCar} inputVal = {this.state.inputVal} parentThis = {this}/>
        <Posts/>
      </div>
    )
  }
}

export default App;
