import React from 'react'

import PropTypes from 'prop-types'

export const SURNAME_PLACEHOLDER = 'Фамилия'
export const YEAR_OF_BIRTH_PLACEHOLDER = 'Год рождения'
export const PHONE_PLACEHOLDER = 'Телефон'

class RegisterForm extends React.Component {
  static propTypes = {
    registerForm: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  handleChange = (e) => {
    const { name, value } = e.target
    const { onChange } = this.props

    onChange(name, value)
  }

  handleClick = (e) => {
    alert('Регистрация прошла успешно!')
  }

  render() {
    const {
      registerForm: { surname, yearOfBirth, phone },
    } = this.props
    return (
      <div>
        <h1>Регистрация</h1>
        <input
          value={surname.value}
          name="surname"
          placeholder={SURNAME_PLACEHOLDER}
          onChange={this.handleChange}
        />
        <input
          value={yearOfBirth.value}
          name="yearOfBirth"
          placeholder={YEAR_OF_BIRTH_PLACEHOLDER}
          onChange={this.handleChange}
        />
        <input
          value={phone.value}
          name="phone"
          placeholder={PHONE_PLACEHOLDER}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Зарегистрироваться</button>
      </div>
    )
  }
}

export default RegisterForm
