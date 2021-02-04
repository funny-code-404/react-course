import React from 'react';
import './Form.css';

const regExps = {
  name: /.{3,30}/,
  email: /(\w+)(@{1})(\w+)(\.{1})(\w+)/,
  password: /[а-яА-Яa-zA-Z0-9_]{8,}/
}

export class Form extends React.Component {
  state = {
    data: {
      name: '',
      email: '',
      password: ''
    },

    validation: {
      name: false,
      email: false,
      password: false
    },

    showMessage: false
  }

  handleChange = (e) => {
    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [e.target.name]: e.target.value
      }
    }));

    this.checkValidity(e);
  }

  sendData = () => {
    const { name, email, password } = this.state.data;
    const toSend = this.state.validation.name && this.state.validation.email && this.state.validation.password;

    toSend ? console.log(`name: ${name}, email: ${email}, password: ${password}`) : console.log('Данные не валидны');

    this.setState(prevState => ({
      ...prevState,
      data: {
        name: '',
        email: '',
        password: ''
      },
      showMessage: true
    }));
  }

  checkValidity = (e) => {
    const check = regExps[e.target.name].test(e.target.value);

    this.setState(prevState => ({
      ...prevState,
      validation: {
        ...prevState.validation,
        [e.target.name]: check
      }
    }));
    e.target.className = check ? 'input' : 'input-wrong';
  }

  render() {
    const { name, email, password } = this.state.data;

    return (
      <div className="form">
        <input className="input" value={name} name="name" placeholder="name" onChange={this.handleChange} />
        <p className="message" name="name">{this.state.showMessage && !this.state.validation.name ? 'Имя должно быть от 3 до 30 символов' : ''}</p>
        <input className="input" value={email} name="email" placeholder="email" onChange={this.handleChange} />
        <p className="message">{this.state.showMessage && !this.state.validation.email ? 'e-mail не верный' : ''}</p>
        <input className="input" value={password} name="password" placeholder="password" onChange={this.handleChange} />
        <p className="message">{this.state.showMessage && !this.state.validation.password ? 'пароль должен состоять из цифр и букв и быть длинее 8 знаков' : ''}</p>
        <button className="button" onClick={this.sendData}>Send</button>
      </div>
    )
  }
}

export default Form;
