/* eslint-disable no-unused-vars */
import React from 'react'

import './Form.css'

class Form extends React.Component {
  state = {
    values: {
      name: '',
      email: '',
      password: ''
    },
    errors: {
      name: '',
      email: '',
      password: ''
    }
  }

  // обработка input
  handleChange = (e) => {
    const { name, value } = e.target

    let valid = ''

    if (name === 'name') {
      valid = this.checkValidationName(value)
    } else if (name === 'email') {
      valid = this.checkValidationEmail(value)
    } else {
      valid = this.checkValidationPassword(value)
    }

    this.setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [e.target.name]: valid
      },
      values: {
        ...prevState.values,
        [e.target.name]: e.target.value
      }
    }))
  }

  // валидация
  checkValidationName = (value) => {
    if (value.length <= 3) {
      return value
    } else if (value.length >= 30) {
      return value
    }
  }

  checkValidationEmail = (value) => {
    const reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/

    if (!reg.test(value)) return value
  }

  checkValidationPassword = (value) => {
    const regNumbers = /\d/
    const regLetters = /[a-zA-Z]/

    if (value.length < 8) {
      return value
    } else if (!(regNumbers.test(value) && regLetters.test(value))) {
      return value
    }
  }

  // обработка submit
  handleSubmit = (e) => {
    e.preventDefault()
    const { values, errors } = this.state

    values.name || console.log('Заполните поле ввода имени')
    values.email || console.log('Заполните поле ввода email')
    values.password || console.log('Заполните поле ввода пароля')

    !errors.name && !errors.email && !errors.password &&
     values.name && values.email && values.password && console.log(`Отправлено на сервер:'  ${values.name} + ${values.email} + ${values.password}`)

    e.target.reset()
  }

  render () {
    const { values, errors } = this.state

    return (
      <form className="form" action="#" onSubmit={this.handleSubmit}>
        <label>
          {'Введите ваше имя:'}
          <input
           type="text"
           name="name"
           value={values.name}
        //    required
           placeholder = "Имя от 3 до 30 символов"
           onChange = {this.handleChange}/>
           {errors.name && <span><p>Неверное имя</p></span>}
        </label>
        <label>
          {'Введите ваш email:'}
          <input
           type="email"
           name="email"
           value={values.email}
        //    required
           placeholder = "Пример: jane@sample.com"
           onChange = {this.handleChange} />
           {errors.email && <span><p>Неверный адрес почты</p></span>}
        </label>
        <label>
          {'Введите пароль:'}
          <input
           type="password"
           name="password"
           value={values.password}
        //    required
           placeholder = "Пароль не менее 8 символов из латинских букв и цифр"
           onChange = {this.handleChange}/>
           {errors.password && <span><p>Неверный пароль</p></span>}
        </label>
        <button type="submit" >Отправить</button>
      </form>
    )
  }
}

export default Form
