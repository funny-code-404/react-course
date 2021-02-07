import React from 'react';
import Form from './components/Form/Form.js';
import Table from './components/Table/Table.js';


class App extends React.Component {
  state = {
    cars: [],
  }

  onClick = (formState) => {
    this.setState(prevState => ({
      cars: [...prevState.cars, formState],
      sendData: true
    }));
  }

  render() {
    const { cars, sendData } = this.state;

    return (
      <div>
        <Table data={cars} sendData={sendData} />
        <Form onClick={this.onClick} />
      </div>
    );
  }
}
export default App;
