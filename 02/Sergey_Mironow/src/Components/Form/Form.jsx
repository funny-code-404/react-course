import React from "react";
import "./Form.scss"
import USERS from "../data/users"

class Form extends React.Component {
    defaultState = {
        values: {
            name: '',
            mail: '',
            password: '',
        },
        errors: {
            name: false,
            mail: false,
            password: false,
        }
    }

    state = this.defaultState

    inputIsValid = {
        name: /^\w{3,30}$/,
        mail: /^([\w\d]+?.*?)@(.+?\.)*?(?<=\.).+?$/,
        password: /^[\d\w]{8,}$/
    }

    handleChange = (event) => {
        this.setState((prevState) => ({
            values: {
                ...prevState.values,
                [event.target.name]: event.target.value,
            },
            errors: {
                ...prevState.errors,
                [event.target.name]: !(this.inputIsValid[event.target.name].test(event.target.value))
            }
            
        }))
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        USERS.push(this.state.values)
        this.setState(this.defaultState)
        
    }

    render(){
        const {name, mail, password} = this.state.values
        const {name: nameError, mail: mailError, password: passwordError} = this.state.errors
        const disabled = (nameError || mailError || passwordError || !name || !mail || !password) && 'disabled'

        return (           
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <input name = "name" placeholder="Name" value = {name} onChange={this.handleChange}/>
                    {nameError && <p>From 3 to 8 characters.</p>}
                </div>
                <div>
                    <input name = "mail" placeholder="Mail" value = {mail} onChange={this.handleChange}/>
                    {mailError && <p>incorrect. example@gmail.com</p>}
                </div>
                <div>
                    <input name = "password" placeholder="Password" value = {password} onChange={this.handleChange}/>
                    {passwordError && <p>Shorter than 8 or wrong characters.</p>}
                </div>
                <button disabled = {disabled}>Submit</button>
            </form>

        )
    }
}

export default Form