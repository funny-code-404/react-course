import React from 'react';
import Table from './Components/Table';
import Form from './Components/Form';

class App extends React.Component {
  state = {
    carsInfo: []
  }

  onChange = carsInfo => {
    this.setState(prevState => ({
      ...prevState,
      carsInfo: [...prevState.carsInfo, carsInfo]
    }));
  }

  render() {
    const { carsInfo } = this.state;
    return (
      <div className="App">
        <Form onChange={this.onChange} />
        <Table data={carsInfo}></Table>
      </div>
    );
  }
}

export default App;
