import React from 'react';
import styled from 'styled-components'

import Form from './components/form';
import Table from './components/table';

const AppContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`
const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`

class App extends React.Component {
  state = {
    data: [
      {
        id: 'N',
        brand: 'Марка',
        model: 'Модель',
        year: 'Год',
        price: 'Цена',
        active: false
      }
    ],
      formInput: {
      id: '',
      brand: '',
      model: '',
      year: '',
      price: '',
      active: false,
      validate: true,
    }
  }

  addDataForm = (formInput) => {
    const { data } = this.state

    const copyDataItem = (item, formInput) => {
      for (const key in item) {
        item[key] = formInput[key]
        item.active = false
      }}

    let count = 0
    data.forEach((item, i) => {
      if( item.id === formInput.id ){
        copyDataItem(item, formInput)
        count += 1
      } else if (i === data.length-1 && count === 0){
        data.push(formInput)
      }
    })

    this.setState(prevState=>({
      ...prevState,
      data: data
    }))

    this.setState(prevState => ({
      ...prevState,
      formInput: {
        id: '',
        brand: '',
        model: '',
        year: '',
        price: '',
        active: false,
        validate: true,
    }}))
  }

  getRowId = (id) => {
    const { data } = this.state
    data.map(item => (
      item.id === id && item.id !== 'N' ? (item.active = true, this.setState(prevState=>({
        ...prevState,
        formInput:item,
      }))) : item.active = false
    ))

    this.setState(prevState=>({
      ...prevState,
      data: data
    }))
  }

render(){
  const { data, formInput } = this.state
  return (
    <AppContainer>
      <AppWrapper>
        <Form  addDataForm={this.addDataForm} formInput={formInput} />
        <Table data={data} getRowId={this.getRowId} />
      </AppWrapper>
    </AppContainer>
  )
}
}

export default App;
