import React from 'react';
import './style.css';

const NAME = 'name';
const EMAIL = 'email';
const PASSWORD = 'password';
const EMPTY_ERROR = 'Поле не может быть пустым';
const NAME_ERROR = 'Имя должно быть не меньше 3 символов и не больше 30 символов';
const NAME_UPPER_CASA = 'Имя должно быть с большой буквы';
const EMAIL_ERROR = 'Email должен содержать символ @ и . ';
const PASSWORD_ERROR = 'Пароль должет быть не менее 8 символов';




class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      [NAME]: "",
      [EMAIL]: "",
      [PASSWORD]: "",
      formError: {
        [NAME]: null,
        [EMAIL]: null,
        [PASSWORD]: null,
      },
    }    
  }

   handleChange = (e) => {
    const key = e.target.name;
    const inputName = e.target.value;

    this.setState({
      [key]: inputName,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    
    if(!name) {
      this.handleError('name', EMPTY_ERROR)
    } else if (name.length < 3 || name.length > 30) {
      this.handleError('name', NAME_ERROR)
    }else if(name[0] !== name[0].toUpperCase()) {
      this.handleError('name', NAME_UPPER_CASA);
    } else {
      this.handleError('name', null)
      this.state.value = "";
    }

    if(!email) {
      this.handleError('email', EMPTY_ERROR)
    } else if (!email.includes('@') || !email.includes('.')) {
      this.handleError('email', EMAIL_ERROR)
    } else {
      this.handleError('email', null)
      this.state.value = "";
    }

    if(!password) {
      this.handleError('password', EMPTY_ERROR)
    } else if (password.length < 8) {
      this.handleError('password', PASSWORD_ERROR)
    } else {
      this.handleError('password', null)
      this.state.value = "";
    }
  }

  handleError = (name, value) => {
     this.setState((prevState) => ({
       ...prevState,
       formError: {
         ...prevState.formError,
         [name]: value,
       }
     }))
  }

  render() {
    const { formError } = this.state;

    return (
      <div className='container-form'>
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value} placeholder='Имя' name= {NAME} onChange={this.handleChange} onBlur={this.handleBlur}/>
        {formError.name !== null && <div>{formError.name}</div>}
        <input type='text' value={this.state.value} placeholder='Email' name={EMAIL} onChange={this.handleChange}/>
        {formError.email !== null && <div>{formError.email}</div>}
        <input type='password' value={this.state.value} placeholder='Пароль' name={PASSWORD} onChange={this.handleChange}/>
        {formError.password !== null && <div>{formError.password}</div>}
        <button>Отправить</button>
      </form>
    </div>
    )
  }
}

export default Form;
