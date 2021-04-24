import React from 'react'
import * as constants from '../../constants'

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    errors: {
      name: null,
      email: null,
      password: null,
    },
    isShown: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  handleClick = (e) => {
    e.preventDefault()

    const { name, email, password } = this.state

    this.setState((prevState) => ({
      ...prevState,
      isShown: true,
    }))

    if (!name) {
      this.setError('name', constants.EMPTY_ERROR)
    } else if (name.length < 3 || name.length > 30) {
      this.setError('name', constants.NAME_ERROR)
    } else {
      this.setError('name', null)
    }
    if (!email) {
      this.setError('email', constants.EMPTY_ERROR)
    } else if (!email.includes('@') || !email.includes('.')) {
      this.setError('email', constants.EMAIL_ERROR)
    } else {
      this.setError('email', null)
    }
    if (!password) {
      this.setError('password', constants.EMPTY_ERROR)
    } else if (password.length < 8 || !/([0-9].*[a-z])|([a-z].*[0-9])/.test(password)) {
      this.setError('password', constants.PASSWORD_ERROR)
    } else {
      this.setError('password', null)
    }
  }

  setError = (inputName, value) => {
    this.setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [inputName]: value,
      },
    }))
  }

  render() {
    const { name, email, password, errors, isShown } = this.state
    return (
      <form>
        <input
          value={name}
          name="name"
          placeholder={constants.NAME_PLACEHOLDER}
          onChange={this.handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          value={email}
          name="email"
          placeholder={constants.EMAIl_PLACEHOLDER}
          onChange={this.handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          value={password}
          name="password"
          placeholder={constants.PASSWORD_PLACEHOLDER}
          onChange={this.handleChange}
          className={errors.password ? 'error' : ''}
        />
        {errors.password && <p>{errors.password}</p>}
        <button onClick={this.handleClick}>Отправить</button>
        {!errors.email && !errors.name && !errors.password && isShown && (
          <div>
            <h3>Введенная информация</h3>
            <ul>
              <li>{name}</li>
              <li>{email}</li>
              <li>{password}</li>
            </ul>
          </div>
        )}
      </form>
    )
  }
}

export default Form
