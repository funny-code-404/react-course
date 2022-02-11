import React from "react";
import {NAME_ERROR} from './consts';
import {EMAIL_ERROR} from './consts';
import {PSWRD_ERROR} from './consts';
import './style.css';

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

    handleChange = (e) => {
        this.setState((prevState) => ( {      
            ...prevState,
            values: {
                ...prevState.values,
                [e.target.name]: e.target.value
            }
        })
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = this.state.values;

        const errName = (name.length < 3 || name.length > 30) ? {NAME_ERROR} : '';
        const errEmail = (!email.includes('&') && !email.includes('.')) ? {EMAIL_ERROR} : '';
        const errPassword = (password.length < 8  || !/[a-zа-яё]/i.test(password) || !/[0-9]/.test(password)) ? {PSWRD_ERROR} : '';

        this.setState((prevState) => ( {      
            ...prevState,
            errors:{
                // ...prevState.values,
                name: errName,
                email: errEmail,
                password: errPassword
            }
        })

        )
        console.log(this.state);
        console.log(`Имя: ${this.state.values.name}, email: ${this.state.values.email}, пароль: ${this.state.values.password}`)
    }

    render() {

        const { name, email, password } = this.state.values;

        return (

            <form onSubmit={this.handleSubmit}>
                <label>Ваше имя:
                    <input type="text" name="name" placeholder="Алесь Иванов" value={name} onChange={this.handleChange} />
                    {this.state.errors.name && <div className="error">{NAME_ERROR}</div>}
                </label>
                <label>Ваш Email:
                    <input type="email" name="email" placeholder="name@gmail.com" value={email} onChange={this.handleChange}/>
                    {this.state.errors.email && <div className="error">{EMAIL_ERROR}</div>}
                </label>
                <label>Пароль:
                    <input type="password" name="password" placeholder="*****" value={password} onChange={this.handleChange}/>
                    {this.state.errors.password && <div className="error">{PSWRD_ERROR}</div>}

                </label>
                <button>Отправить</button>

            </form>

        )

    }

}

export default Form;