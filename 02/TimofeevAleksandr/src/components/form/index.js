import React from 'react'
import './style.css'

class Form extends React.Component {
  state = {
    name : '',
    email : '',
    password : '',
    validateName : true,
    validateEmail : true,
    validatePassword : true,
  }

  handleChange = (e) => {
    const input = e.target.name
    this.setState(prevState=>({
      ...prevState,
      [input] : e.target.value
    }))
    !this.state.validateName && this.validateName(e)
    !this.state.validateEmail && this.validateEmail(e)
    !this.state.validatePassword && this.validatePassword(e)
  }

  validateName = (e) => {
    if (e.target.name === 'name'){
    const regexpName = /^[A-z0-9_-]{4,16}$/
    this.setState(prevState=>({
      ...prevState,
        validateName : regexpName.test(e.target.value),
    }))
  }
  }

  validateEmail = (e) => {
    if (e.target.name === 'email'){
    const regexpEmail = /\S+@\S+\.\S+/
    this.setState(prevState=>({
      ...prevState,
      validateEmail : regexpEmail.test(e.target.value),
    }))
  }
  }

  validatePassword = (e) => {
    if (e.target.name === 'password'){
    const regexpPassword = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*/
    this.setState(prevState=>({
      ...prevState,
        validatePassword : regexpPassword.test(e.target.value),
    }))
  }
  }

  handleClickSend = (e) => {
    e.preventDefault()
    const { validateName, validateEmail, validatePassword, name, email, password } = this.state

    if (validateName && validateEmail && validatePassword){
      const data = {name : name, email : email, password : password}
      this.props.getDataForm(data)
    this.setState(prevState=>({
      ...prevState,
      name : '',
      email : '',
      password : '',
    }))
  }
}


  render(){
    const { name, email, password, validateName, validateEmail, validatePassword } = this.state

    return(
      <form>
        <input className={validateName ? '' : 'error'} value={name} name='name' type='text' placeholder='name'
          onChange={this.handleChange} onBlur={this.validateName} />
          {!validateName && <p className='errorText'>Имя должно содержать от 4 до 16 символов латинского алфавита.</p>}
        <input className={validateEmail ? '' : 'error'} value={email} name='email' type='email' placeholder='email'
          onChange={this.handleChange} onBlur={this.validateEmail} />
          {!validateEmail && <p className='errorText'>Введите корректный адрес электронной почты.</p>}
        <input className={validatePassword ? '' : 'error'} value={password} name='password' type='password' placeholder='password'
          onChange={this.handleChange} onBlur={this.validatePassword} />
          {!validatePassword && <p className='errorText'>Пароль должен содержать не менее 6 символов латинского алфавита верхнего и нижнего регистра и цифр.</p>}
        <button onClick={this.handleClickSend}>send</button>
      </form>
    )
  }
}

export default Form
