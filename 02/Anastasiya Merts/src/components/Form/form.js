import React from 'react';
import { Input, Button } from './styles';
import { INPUTS } from './const'

class Form extends React.Component {
    state = {
        data: {
            [INPUTS.name]: '',
            [INPUTS.email]: '',
            [INPUTS.password]: '',
            [INPUTS.nameValid]: false,
            [INPUTS.emailValid]: false,
            [INPUTS.passwordValid]: false,
            [INPUTS.error]: '',
        },
    };

    handleChange = (event) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,//copy prev
                [event.target.name]: event.target.value,
            }

        }),
            () => { this.checkFields(event.target.name, event.target.value) }
        );
    };


    checkFields = (fieldName, value) => {
        // let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let error = this.state.error;

        switch (fieldName) {
            case 'name':
                let nameValid = this.state.nameValid;
                const reName = /^\w{3,30}$/;
                nameValid = reName.test(value);
                error = nameValid ? '' : 'Name is invalid';
                this.setState((prevState) => (
                    {
                        data:
                        {
                            ...prevState.data,
                            [INPUTS.nameValid]: nameValid,
                        },
                    }));
                break;
            case 'email':
                const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                emailValid = reEmail.test(value);
                error = emailValid ? '' : 'Email is invalid';
                this.setState((prevState) => (
                    {
                        data:
                        {
                            ...prevState.data,
                            [INPUTS.emailValid]: emailValid,
                        },
                    }));
                break;
            case 'password':
                const rePassw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                passwordValid = rePassw.test(value);
                error = passwordValid ? '' : 'Password is invalid';
                this.setState((prevState) => (
                    {
                        data:
                        {
                            ...prevState.data,
                            [INPUTS.passwordValid]: passwordValid,
                        },
                    }));
                break;
            default:
                break;
        }
    }

    sendData = () => {
        const { data: { name, email, password } } = this.state;
        let message = `You sended this data:\n  name - ${name}, email - ${email}, password - ${password}`;

        this.setState((prevState) => ({
            data: {
                message: message,
                [INPUTS.name]: '',
                [INPUTS.email]: '',
                [INPUTS.password]: '',
            }
        }));
    }

    render() {
        const { data: { name, email, password, nameValid, emailValid, passwordValid, message } } = this.state;
        let borderName = nameValid ? "gray" : "red";
        let borderEmail = emailValid ? "gray" : "red";
        let borderPassword = passwordValid ? "gray" : "red";
        return (
            <>
                <div className='form'>
                    <Input name={INPUTS.name} value={name} placeholder={INPUTS.name} onChange={this.handleChange} style={{ borderColor: borderName }}></Input>
                    <Input name={INPUTS.email} value={email} placeholder={INPUTS.email} onChange={this.handleChange} style={{ borderColor: borderEmail }}></Input>
                    <Input name={INPUTS.password} value={password} placeholder={INPUTS.password} type='password' onChange={this.handleChange} style={{ borderColor: borderPassword }}></Input>
                    <Button onClick={this.sendData} disabled={!(nameValid && emailValid && passwordValid)}>Send</Button>
                </div>
                <div className='result'>
                    {message}
                </div>
            </>
        );
    }
}

export default Form;