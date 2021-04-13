import React from 'react';
import Form from './components/Form/form';
import Table from './components/Table/table';
import './styles.css';
import { cars } from './components/cars';

class App extends React.Component {
  state = {
    data: {
      carsValues: cars,
    },
    lineData: null,
  };

  onChange = (formData) => {
    console.log(this.state.data.carsValues);

    this.state.data.carsValues.push(formData);

    this.setState((prevState) => ({
      ...prevState.data,
    }));
  };

  funApp = (lineData) => {
    this.setState( {
      lineData: lineData,
    } );
  };

  render() {
    const { data, lineData } = this.state;
    let lastId = data.carsValues.length + 1;
    return (
      <>
        <div>
          <Table tableData={data} funApp={this.funApp}/>
          <Form  lastId={lastId} lineData={lineData} onChange={this.onChange} />
        </div>
      </>
    );
  }
}

export default App;
