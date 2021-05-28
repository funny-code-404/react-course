import React from 'react'

import PropTypes from 'prop-types'

import EntryForm from '../EntryForm'
import RegisterForm from '../RegisterForm'
import DeleteForm from '../DeleteForm'

export const NAME_PLACEHOLDER = 'Имя'
export const EMAIL_PLACEHOLDER = 'Почта'
export const PASSWORD_PLACEHOLDER = 'Пароль'

class LoginForm extends React.Component {
  static propTypes = {
    loginForm: PropTypes.object.isRequired,
    actionButton: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = (e) => {
    const { onChange } = this.props
    const { name, value } = e.target

    onChange(name, value)
  }

  render() {
    const {
      loginForm: { name, email, password },
      actionButton: { action },
    } = this.props
    return (
      <form>
        <input
          name="name"
          value={name.value}
          placeholder={NAME_PLACEHOLDER}
          onChange={this.handleChange}
        />
        <input
          name="email"
          value={email.value}
          placeholder={EMAIL_PLACEHOLDER}
          onChange={this.handleChange}
        />
        <input
          name="password"
          value={password.value}
          placeholder={PASSWORD_PLACEHOLDER}
          onChange={this.handleChange}
        />
        {action === 1 && <EntryForm />}
        {action === 2 && <RegisterForm />}
        {action === 3 && <DeleteForm />}
      </form>
    )
  }
}

export default LoginForm
