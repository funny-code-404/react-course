import React from 'react'

import Table from './components/Table'
import Form from './components/Form'
import './styles.css'

class App extends React.Component {
  state = {
    auto: {
      car: '',
      model: '',
      year: '',
      cost: '',
    },
    cars: [
      {
        car: 'Volkswagen',
        model: 'Passat',
        year: 2018,
        cost: 25000,
      },
    ],
  }

  setTableRow = (auto) => {
    this.setState((prevState) => ({
      auto: {
        car: '',
        model: '',
        year: '',
        cost: '',
      },
      cars: [...prevState.cars, auto],
    }))
  }

  getTableRow = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      auto: prevState.cars[id],
    }))
  }

  render() {
    return (
      <>
        <Table data={this.state} getTableRow={this.getTableRow} />
        <Form data={this.state} setTableRow={this.setTableRow} />
      </>
    )
  }
}

export default App
