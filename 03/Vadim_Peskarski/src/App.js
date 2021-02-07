import React from 'react';
import Form from './components/Form/Form.js';
import Table from './components/Table/Table.js';


class App extends React.Component {
  state = {
    cars: [],
    tableCar: {
      mark: '',
      model: '',
      year: '',
      price: ''
    }
  }

  onClick = (formState) => {
    this.setState(prevState => ({
      cars: [...prevState.cars, formState],
      tableCar: {
        mark: '',
        model: '',
        year: '',
        price: ''
      }
    }));
  }

  onTableClick = (tableState) => {
    this.setState(prevState => ({
      ...prevState,
      tableCar: { ...tableState }
    }));
  }

  render() {
    const { cars, tableCar } = this.state;

    return (
      <div>
        <Table data={cars} onTableClick={this.onTableClick} />
        <Form onClick={this.onClick} data={tableCar} />
      </div>
    );
  }
}
export default App;
