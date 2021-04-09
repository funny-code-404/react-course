import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: {
                name: '',
                email: '',
                password: ''    
            },
        nameValidate: false,
        emailValidate: false,
        passwordValidate: false,
        dataValidate: false
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        }, () => {
            this.checkForm(name, value)
        });
    }
    
    checkForm = (checkName, value) => {
        let { error, nameValidate, emailValidate, passwordValidate } = this.state;
        
        switch (checkName) {
            case 'name':
                nameValidate = value.match(/^([A-ZА-Я]{1}[A-Za-zА-Яа-яЁё]{2,30})$/);
                error.name = nameValidate? '' : 'Имя введено некорректно';
                break;
            case 'email':
                emailValidate = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                error.email = emailValidate? '' : 'E-mail введён неверно';
                break;
            case 'password':
                passwordValidate = value.length >= 8;
                error.password = passwordValidate? '' : 'Слишком короткий пароль';
                break;
            default:
                break;
        }

        this.setState({
            dataErrors:error,
            nameValidate: nameValidate,
            emailValidate: emailValidate,
            passwordValidate: passwordValidate
        }, this.validateData);
    }

    validateData = () => {
        this.setState({
            dataValidate: this.state.nameValidate && this.state.emailValidate && this.state.passwordValidate
        });
    }

    errorClass = (error) => {
        return (error.length === 0? 'valid': 'error');
    }

    handleClick = (e) => {
        const { dataValidate, name, email, password } = this.state; 

        e.preventDefault();

        if (dataValidate) {
            console.log('User name: ' + name, '\nUser email: ' + email, '\nUser password: ' + password);
        }
    }

    render () {
        const { error, name, email, password } = this.state;

        return (
            <form>
                <h1>Введите данные</h1>
                <p>{error.name}</p>
                <input className={this.errorClass(error.name)} value={name} name="name" placeholder="Введите имя" onChange={this.handleChange} />
                <p>{error.email}</p>
                <input className={this.errorClass(error.email)} value={email} name="email" placeholder="Введите e-mail" onChange={this.handleChange} />
                <p>{error.password}</p>
                <input className={this.errorClass(error.password)} value={password} name="password" type="password" placeholder="Введите пароль" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Send</button>
            </form>
        )
    }
}

export default Form;
