import React from 'react'

import List from './components/List'
import './styles.css'

class App extends React.Component {
  state = {
    id: -1,
    input: '',
    data: [],
  }

  saveState = (state) => {
    localStorage.removeItem('items')
    localStorage.removeItem('id')
    localStorage.removeItem('input')
    localStorage.setItem('items', JSON.stringify(state.data))
    localStorage.setItem('id', JSON.stringify(state.id))
    localStorage.setItem('input', JSON.stringify(state.input))
  }

  componentDidMount() {
    if (this.state.data.length === 0) {
      const data = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
      const id = localStorage.getItem('id') ? JSON.parse(localStorage.getItem('id')) : []
      const input = localStorage.getItem('input') ? JSON.parse(localStorage.getItem('input')) : []
      this.setState({ id, input, data })
    }
  }

  handleAdd = () => {
    const { input, id } = this.state
    this.setState(
      (prevState) => ({
        ...prevState,
        id: id + 1,
        data: [...prevState.data, { id: id + 1, value: input, isDone: false }],
      }),
      () => {
        this.saveState(this.state)
      }
    )
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState(
      (prevState) => ({
        ...prevState,
        input: value,
      }),
      () => {
        this.saveState(this.state)
      }
    )
  }

  onChangeHandle = (id, isDone) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        data: prevState.data.map((el) => (el.id === +id ? { ...el, isDone: isDone } : el)),
      }),
      () => {
        this.saveState(this.state)
      }
    )
  }

  deleteItem = (id) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        data: prevState.data.filter((item) => item.id !== +id),
      }),
      () => {
        this.saveState(this.state)
      }
    )
  }

  render() {
    const { input, data } = this.state
    return (
      <div className="container">
        <input value={input} onChange={this.handleChange}></input>
        <button onClick={this.handleAdd}>Добавить</button>
        <List data={data} deleteItem={this.deleteItem} isDoneChange={this.onChangeHandle} />
      </div>
    )
  }
}

export default App
