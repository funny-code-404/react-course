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
    const newData = [...data]
    newData.push(dataForm)
    newData.sort((a,b) => b.active - a.active)
    this.setState(prevState => ({
      ...prevState,
      data: newData,
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
    const newData = [...data]
    newData.map(item => (
      item.id === id ? item.active = !item.active : ''
    ))
    newData.sort((a,b) => b.active - a.active)
    this.setState(prevState => ({
      ...prevState,
      data: newData,
    }))
    localStorage.setItem('data', JSON.stringify(data))
  }

  deleteNote = (id) => {
    const { data } = this.state
    const newData = []
    data.map((item, i) => (
      item.id === id ? '' : newData.push(item)
    ))
    this.setState(prevState => ({
      ...prevState,
      data: newData,
    }))
    localStorage.setItem('data', JSON.stringify(newData))
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
