import { Component } from 'react'

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', password: '' }
  }

  render() {
    const { name, email, password } = this.state
    return (
      <div className="weather">
        <input placeholder="Имя"></input>
        <input placeholder="Email"></input>
        <input placeholder="Пароль"></input>
      </div>
    )
  }
}

export default UserForm
