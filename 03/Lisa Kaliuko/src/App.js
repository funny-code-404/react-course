import React from 'react'

import Form from './components/Form'
import Table from './components/Table'

class App extends React.Component {
  state = {
    tableRows: [],
    formInputs: {},
  }

  getData = (data) => {
    this.setState((prevState) => ({
      ...prevState,
      tableRows: [...prevState.tableRows, data]
    }))
  }

  getDataFromTable = (data) => {
    const formInputs = {
      brand: data.children[1].innerText,
      model: data.children[2].innerText,
      year: data.children[3].innerText,
      price: data.children[4].innerText,
    }

    this.setState({formInputs})
  }

  render() {
    return (
      <div>
        <Table data={this.state.tableRows} onChange={this.getDataFromTable} />
        <Form onChange={this.getData} dataFromTable={this.state.formInputs}/>
      </div>
    )
  }
}

export default App;
