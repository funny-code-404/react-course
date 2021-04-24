import React from 'react'
import styled from 'styled-components'

import * as constants from '../../constants'

const StyledForm = styled.form`
  input,
  button {
    outline: none;
  }
  button {
    background: none;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    cursor: pointer;
    width: 300px;
    border: 2px solid black;
    margin: 10px;
    margin-left: 335px;
  }
  button:hover {
    color: black;
  }

  input {
    margin: 0;
    font-size: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    line-height: 18px;
    height: 25px;
    padding: 10px;
    margin: 10px;
    border: 2px solid black;
    background: white;
    color: black;
    width: 600px;
  }
`

class Form extends React.Component {
  state = {
    car: '',
    model: '',
    year: '',
    cost: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    if (
      !e.target.car.value ||
      !e.target.model.value ||
      !e.target.year.value ||
      !e.target.cost.value
    ) {
      alert('Все поля должны быть заполнены')
      return
    }

    this.props.setTableRow({
      car: e.target.car.value,
      model: e.target.model.value,
      year: e.target.year.value,
      cost: e.target.cost.value,
    })

    this.setState({
      car: '',
      model: '',
      year: '',
      cost: '',
    })
  }

  render() {
    const { car, model, year, cost } = this.state
    const { auto } = this.props.data
    return (
      <StyledForm id="autoForm" onSubmit={this.handleOnSubmit}>
        <input
          value={car || auto.car}
          name="car"
          placeholder={constants.CAR_PLACEHOLDER}
          onChange={this.handleChange}
        />
        <input
          value={model || auto.model}
          name="model"
          placeholder={constants.MODEL_PLACEHOLDER}
          onChange={this.handleChange}
        />
        <input
          value={year || auto.year}
          name="year"
          type="number"
          placeholder={constants.YEAR_OF_ISSUE_PLACEHOLDER}
          onChange={this.handleChange}
        />
        <input
          value={cost || auto.cost}
          name="cost"
          type="number"
          placeholder={constants.COST_PLACEHOLDER}
          onChange={this.handleChange}
        />
        <button type="submit">{constants.ADD_BUTTON}</button>
      </StyledForm>
    )
  }
}

export default Form
