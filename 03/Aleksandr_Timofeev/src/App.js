import React from 'react';
import Table from './components/table/table';
import Form from './components/form/form';
import './style.css'

class App extends React.Component{
  state = {
    data : []
  }

  addPosition = (dataForm) => {
    this.setState(
      {
        data : this.state.data.concat(dataForm)
      }
    )
  }



  render(){


    return(
    <div className="wrapper-app">
      <Table data={this.state.data} />
      <Form addPosition={this.addPosition} />
    </div>
  )}
}

export default App;

