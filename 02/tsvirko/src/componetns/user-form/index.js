import { Component } from 'react'
import './style.css'

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {
        name: false,
        email: false,
        password: false,
      },
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  handleClick = (e) => {
    e.preventDefault()
    let isError = false
    const { name, email, password } = this.state

    if (name.length < 3 || name.length > 30) {
      isError = true
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          name: true,
        },
      }))
    }
    if (email.indexOf('@') < 0) {
      isError = true
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          email: true,
        },
      }))
    }
    if (password.length < 8) {
      isError = true
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          password: true,
        },
      }))
    }

    if (!isError) {
      console.log({ name, email, password })
      this.setState((prevState) => ({
        ...prevState,
        name: '',
        email: '',
        password: '',
        errors: {
          name: false,
          email: false,
          password: false,
        },
      }))
    }
  }

  render() {
    const {
      name,
      email,
      password,
      errors: { name: nameError, email: emailError, password: passwordError },
    } = this.state
    return (
      <form className="user-form">
        <div className="main">
          <input name="name" placeholder="Имя" onChange={this.handleChange} value={name} />
          {nameError && (
            <p className="error">Имя должно быть не короче 3 и не длинее 30 символов</p>
          )}
          <input name="email" placeholder="Email" onChange={this.handleChange} value={email} />
          {emailError && <p className="error">Email должен содержать @</p>}
          <input
            name="password"
            placeholder="Пароль"
            onChange={this.handleChange}
            value={password}
          />
          {passwordError && <p className="error">Пароль должен быть длинее 8 символов</p>}
          <button onClick={this.handleClick}>Отправить</button>
        </div>
      </form>
    )
  }
}

export default UserForm
