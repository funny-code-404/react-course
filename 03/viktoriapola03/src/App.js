
import React from 'react';

import Form from './components/Form';
import Table from './components/Table';


class App extends React.Component {
  state = {
    cars: [],
    empty: {
      car: "",
      model: "",
      year: "",
      price: "",
    },
    inputs: {
      car: "",
      model: "",
      year: "",
      price: "",
    }
  };
  
  inputsValue = (cars) => {
    this.setState((prevState) => ({
        ...prevState,
        cars: [...prevState.cars, cars]
    }));    
  };

  hendleClickTable = (e) => {
    const parent = e.target.parentNode;
    const str = parent.innerText;
    const arrStr = str.split('\n');
    this.setState((prevStste) => ({
      ...prevStste.cars,
      ...prevStste.empty,
      inputs: {
        car: arrStr[1],
        model: arrStr[2],
        year: arrStr[3],
        price: arrStr[4],
      }
    }));
  };

  render() {

    const { cars } = this.state;

    return (
      <>
      <Table cars={cars} clickTable={this.hendleClickTable}/>
      <Form onChange={this.inputsValue} data={this.state.empty} dataInputs={this.state.inputs} />
      </>
    );
  };
};

export default App;
