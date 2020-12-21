import React from 'react'
import './App.css';

import List from './List'

class App extends React.Component {

  state = {
    data: [],
  }

async getData() {
    const res = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const { civilizations: data } = await res.json();

  this.setState({
    data
    })
  };

  componentDidMount() {
    this.getData();
  }

  render() {

    const { data } = this.state;

    return (
      Boolean(data.length) && <List data = {data} />
    );
  } 
}

export default App;



