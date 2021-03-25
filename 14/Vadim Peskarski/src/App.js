import React from 'react';
import './App.css';
import Data from './components/Data/Data';
import Form from './components/Form/Form';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Data url ="http://jsonplaceholder.typicode.com/posts" />
        <Form />
      </div>
    )
  }
}

export default App;
