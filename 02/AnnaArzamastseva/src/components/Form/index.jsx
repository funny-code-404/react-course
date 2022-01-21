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
            name: false,
            email: false,
            password: false
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
        console.log(this.state);

        const { name, email, password } = this.state.values;

        let errName = (name.length < 3 || name.length > 30) ? true : false;
        let errEmail = (!email.includes('&') && !email.includes('.')) ? true : false;
        let errPassword = (password.length < 8  || !/[a-zа-яё]/i.test(password) || !/[0-9]/.test(password)) ? true : false;

        this.setState((prevState) => ( {      
            ...prevState,
            values: {
                ...prevState.values,
                [e.target.name]: e.target.value
            },
            errors:{
                ...prevState.values,
                name: errName,
                email: errEmail,
                password: errPassword
            }
        })
        )
    }

    render() {

        const { name, email, password } = this.state.values;
        // const { nameEr, emailEr, passwordEr } = this.state.errors;

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