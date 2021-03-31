import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

const App = () => {

  return (
    <div className="App">
      <Form />
      <List />
    </div>
  )
}

export default App;
