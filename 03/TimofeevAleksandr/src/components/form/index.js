import React from 'react'
import styled from 'styled-components'

const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  width: 28%;
  border: 1px solid black;
  padding: 6px 24px 6px 6px;
  position: fixed;
  top: 10px;

    input {
      padding: 6px;
      margin:12px 0;
      width: 100%;
      border: 1px solid black;
      padding: 3px 6px;
      font-size: 1.1rem;
    }
    button{
      margin: 12px 0 0 10px;
      padding: 0;
      font-size: 1.1rem;
    }
`
const Validate = styled.div`
    color: red;
    text-align: center;
`

class Form extends React.Component{
    state={
      id : '',
      brand : '',
      model : '',
      year : '',
      price : '',
      active : false,
      validate: true,
    }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const id = new Date().getTime()
    this.setState(prevState => ({
        ...prevState,
        [name] : value,
        active: id !== '' ? false : true,
        id: this.state.id === '' ? id : this.state.id,
    }))
  }

  validate = (formData) => {
    if (formData.brand && formData.model && formData.year && formData.price){
      this.props.addDataForm(this.state)
      this.setState(prevState => ({
        ...prevState,
          id: '',
          brand: '',
          model: '',
          year: '',
          price: '',
          active: false,
          validate: true,
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
        validate: false,
      }))
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.validate(this.state)
  }

  componentDidUpdate(prevProps){
    const { formInput } = this.props
    if (formInput.id && !this.state.id){
      this.setState(formInput)
    } else if (prevProps.formInput.id !== formInput.id){
      this.setState(formInput)
    }
  }

  handleFocus = () => {
    this.setState(prevState => ({
      ...prevState,
      validate: true,
    }))
  }

  render(){
    const { brand, model, year, price, validate } = this.state
    return(
      <FormEl>
        <label htmlFor='brand'>
          <input id='brand' value={brand} name='brand' type='text' placeholder='brand'
          onChange={this.handleChange} onFocus={this.handleFocus} />
        </label>
        <label htmlFor='model'>
          <input id='model' value={model} name='model' type='text' placeholder='model'
          onChange={this.handleChange} onFocus={this.handleFocus} />
        </label>
        <label htmlFor='year'>
          <input id='year' value={year} name='year' type='text' placeholder='year'
          onChange={this.handleChange} onFocus={this.handleFocus} />
        </label>
        <label htmlFor='price'>
          <input id='price' value={price} name='price' type='text' placeholder='price'
          onChange={this.handleChange} onFocus={this.handleFocus} />
        </label>
        {!validate && <Validate>Все поля должны быть заполнены</Validate>}
        <button onClick={this.handleClick}>Добавить</button>
        {}
      </FormEl>
    )
  }
}

export default Form
