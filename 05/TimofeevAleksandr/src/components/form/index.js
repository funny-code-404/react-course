import React from 'react'
import styled from 'styled-components'


const FormWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 200px;
`
const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  background: lightblue;
    input{}
    textarea{
      height:150px;
      resize: none;
    }
    button{}
`

class FormToDo extends React.Component{
  state = {
    text: '',
    title: '',
    id: '',
    active: true,
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.getDataForm(this.state)
    this.setState(prevState => ({
      ...prevState,
      text: '',
      title: '',
      active: true,
    }))
  }

  handleChange = (e) => {
    const id = new Date().getTime()
    this.setState(prevState => ({
      ...prevState,
      id: this.state.id ? this.state.id : id,
      [e.target.name] : e.target.value
    }))
  }


  render() {
    const { text, title } = this.state
    return(
      <FormWrapper>
      <Form>
        <input name='title' value={title} onChange={this.handleChange} placeholder='title' type='text'/>
        <textarea name='text' value={text} onChange={this.handleChange} placeholder='text' type='text'/>
        <button onClick={this.handleClick}>add</button>
      </Form>
      </FormWrapper>
    )
  }
}

export default FormToDo
