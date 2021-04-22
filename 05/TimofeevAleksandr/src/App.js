import React from 'react'
import styled from 'styled-components';

import FormToDo from './components/form';
import List from './components/list';

const Button = styled.button`
  background: #c6ffec;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 1.2rem;
  padding: 6px 12px;
`

class App extends React.Component {

  state ={
    data: [],
    formShow: false,
  }

  getDataForm = (dataForm) => {
    const { data } = this.state
    data.push(dataForm)
    data.sort((a,b) => b.active - a.active)
    this.setState(prevState => ({
      ...prevState,
      data: data,
      formShow: false,
    }))
    localStorage.setItem('data', JSON.stringify(data))
  }

  handleClickAddNote = () => {
    this.setState(prevState => ({
      ...prevState,
      formShow: true
    }))
  }

  activeNote = (id) => {
    const { data } = this.state
    data.map(item => (
      item.id === id ? item.active = !item.active : ''
    ))
    data.sort((a,b) => b.active - a.active)
    this.setState(prevState => ({
      ...prevState,
      data: data,
    }))
    localStorage.setItem('data', JSON.stringify(data))
  }

  deleteNote = (id) => {
    const { data } = this.state
    const arr = []
    data.map((item, i) => (
      item.id === id ? '' : arr.push(item)
    ))
    this.setState(prevState => ({
      ...prevState,
      data: arr,
    }))
    localStorage.setItem('data', JSON.stringify(arr))
  }

  componentDidMount (){
    try{
      const data = localStorage.data ? JSON.parse(localStorage.data) : []
      this.setState(prevState => ({
        ...prevState,
        data: data,
      }))
    } catch (error) {
      console.log(error, 'error')
    }
  }

render () {
  const { data, formShow } = this.state
  return (
    <div>
      <Button onClick={this.handleClickAddNote} >Добавить заметку</Button>
      {formShow && <FormToDo getDataForm={this.getDataForm}/>}
      {Boolean(data.length) && <List data={data} activeNote={this.activeNote} deleteNote={this.deleteNote}/>}
    </div>
  )
}}

export default App;
