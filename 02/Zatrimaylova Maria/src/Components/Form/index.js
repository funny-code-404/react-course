import React from 'react';
import './style.css';

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    validation: {
      name: 'default',
      email: 'default',
      phone: 'default',
      password: 'default',
      confirmPassword: 'default',
    }
  };

  handleNameChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState, 
      [name]: value,
      validation: {
        ...prevState.validation,
        name: nameValidation,
      }
    }));

    const nameValidation = value.length <= 25 ? 'valid' : 'invalid';
  };

  handleEmailChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      validation: {
        ...prevState.validation,
        email: emailValidation,
      }
    }));

    const emailValidation = value.match(/^([\w.%+-]+)@gmail.com/) ? 'valid' : 'invalid';
  };

  handlePhoneChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      validation: {
        ...prevState.validation,
        phone: phoneValidation,
      }
    }));

    const phoneValidation = value.match(/8044[0-9]{7}/) && value.length == 11 ? 'valid' : 'invalid';
  };

  handlePasswordChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      validation: {
        ...prevState.validation,
        password: passwordValidation,
      }
    }));

    const passwordValidation = (value.match(/[A-Z]/) && value.match(/[a-z]/) && value.match(/[0-9]/)) ? 'valid' : 'invalid';
  };

  handleConfirmPasswordChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      validation: {
        ...prevState.validation,
        confirmPassword: confirmValidation,
      }
    }));

    const confirmValidation = (value === this.state.password) ? 'valid' : 'invalid';
  };

  render() {
    const { buttonTitle, formTitle } = this.props;
    const { name, email, phone, password, repetedPassword, validation } = this.state;
    return (
      <>
        <div className='form__background'>
          <h2 className='form__title'>{formTitle}</h2>
          <form className='form'>
            <input name='name' value={name} className={validation.name} onChange={this.handleNameChange} placeholder='Имя'/>
            {validation.name === 'invalid' && <p className='invalid__message'>Имя не должно превышать 25 символов</p>}

            <input name='email' value={email} className={validation.email} onChange={this.handleEmailChange} placeholder='Адрес электронной почты'/>
            {validation.email === 'invalid' && <p className='invalid__message'>Введите корректный email</p>}

            <input name='phone' type="number" value={phone} className={validation.phone} onChange={this.handlePhoneChange} placeholder='Номер телефона'/>
            {validation.phone === 'invalid' && <p className='invalid__message'>Номер телефона в формате 80449379992</p>}

            <input name='password' value={password} className={validation.password} onChange={this.handlePasswordChange} placeholder='Пароль'/>
            {validation.password === 'invalid' && <p className='invalid__message'>Пароль должен содержать символы латинского алфавита как в нижнем, так и в верхнем <br /> регистре, а также цифры. <br /> Минимальная длина не менее 6 символов.</p>}

            <input name='confirmPassword' value={repetedPassword} onChange={this.handleConfirmPasswordChange} className={validation.confirmPassword} placeholder='Подтверждение пароля'/>
            {validation.password === 'invalid' && <p className='invalid__message'>Пароли не совпадают</p>}

            <button className='button'>{buttonTitle}</button>
          </form>
        </div>
      </>
    )
  }
}

export default Form;