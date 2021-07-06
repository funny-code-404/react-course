import './App.css';
import React from 'react'

import Form from './components/Form/Form';
import Table from './components/Table/Table';
import { store } from './components/store';

const App = (props) => {

  return (
    <>
      <Table cars={store.state.cars} handleTableClick={store.handleTableClick} />
      <Form cars={store.state.cars} handleSubmitClick={store.handleSubmitClick} />
    </>
  )
}

export default App;
