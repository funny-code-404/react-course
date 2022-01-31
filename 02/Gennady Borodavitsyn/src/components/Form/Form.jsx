import React from 'react'
import './Form.css'
import { NAMES, regExpEmail, regExpPassword, regExpUserName } from './const'

class Form extends React.Component {
  state = {
    values: {
      [NAMES.name]: '',
      [NAMES.email]: '',
      [NAMES.password]: '',
    },
    errors: {
      [NAMES.name]: '',
      [NAMES.email]: '',
      [NAMES.password]: '',
    },
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { values } = this.state

    console.log(
      `entered data: userName - ${values.name}, email - ${values.email}, password - ${values.password}`,
    )

    e.target.reset()
    console.log(this.state) // del
  }

  handleChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'name':
        NAMES.valid = this.checkValidName(value)
        break
      case 'email':
        NAMES.valid = this.checkValidEmail(value)
        break
      case 'password':
        NAMES.valid = this.checkValidPassword(value)
        break
    }

    this.setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: NAMES.valid,
      },
    }))
  }

  checkValidName = (value) => {
    if (!regExpUserName.test(value)) return value
  }

  checkValidEmail = (value) => {
    if (!regExpEmail.test(value)) return value
  }

  checkValidPassword = (value) => {
    if (!regExpPassword.test(value)) return value
  }

  render() {
    const { values, errors } = this.state

    return (
      <form className="form" onSubmit={this.handleSubmit} noValidate>
        <div className="brand-logo"></div>
        <div className="brand-title">WELCOME</div>
        <div className="inputs">
          <label htmlFor={NAMES.name}>NAME:</label>
          <input
            type={NAMES.name}
            name={NAMES.name}
            id={NAMES.name}
            placeholder="write any name"
            value={values.name}
            onChange={this.handleChange}
          />
          {errors.name && <div className="error">Cannot be empty</div> && (
            <div className="error">
              Username atleast must start with a capital letter and be longer
              than 3 characters and shorter than 30
            </div>
          )}

          <label htmlFor={NAMES.email}>EMAIL:</label>
          <input
            type={NAMES.email}
            name={NAMES.email}
            id={NAMES.email}
            placeholder="example@test.com"
            value={values.email}
            onChange={this.handleChange}
          />
          {errors.email && (
            <div className="error">Enter a valid email address</div>
          )}

          <label htmlFor={NAMES.password}>PASSWORD:</label>
          <input
            type={NAMES.password}
            name={NAMES.password}
            id={NAMES.password}
            placeholder="min 8 characters long"
            value={values.password}
            onChange={this.handleChange}
          />
          {errors.password && (
            <div className="error">
              Password should contains at least 8 characters and containing
              uppercase, lowercase and numbers
            </div>
          )}

          <button>LOGIN</button>
        </div>
      </form>
    )
  }
}
export default Form
