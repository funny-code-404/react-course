import React, {Component} from 'react'

class Form extends Component{
    state={
        name: "",
        email: "",
        password:"",
        isShown: false,
        error:{
            name: null,
            email: null,
            password: null
        }
    }

    handelChange = (e) =>{
        const {name, value} = e.target
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    handleClick = (e) => {
        e.preventDefault()
        let isValid = true
        const {name, password, email} = this.state
        if(name.length<3 || name.length> 30){
            isValid = false
            this.setState((prevState) => ({
                ...prevState,
                error: {
                    ...prevState.error,
                    name: "Неверное кол-во символов",
                    }
            }))

        }

        if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
            isValid = false
            this.setState((prevState) => ({
                ...prevState,
                error: { ...prevState.error,
                        email: "Нет символов @ или . ",
                        }
            }))

        }
        if(password.length< 8 || !/(?=.*\d)(?=.*[a-z])/i.test(password) ){
            isValid = false
            this.setState((prevState) => ({
                ...prevState,
                error: {
                    ...prevState.error,
                    password: "Пароль не соответствует стандарту"}
            }))
        }

        if(isValid){
            this.setState((prevState) => ({
                ...prevState,
                error:{
                    name: null,
                    email: null,
                    password: null
                },
                isShown: true,
            }))
        }else {
            this.setState((prevState) => ({
                ...prevState,
                isShown: false,
            }))
        }


    }

    render() {
        const {name, password, email, error, isShown} = this.state
        return (
            <form>
                <div className="body">
                    <input name="name" value={name} onChange={this.handelChange}/>
                    {error.name && <p>{error.name}</p>}
                    <input name="email" value={email} onChange={this.handelChange}/>
                    {error.email && <p>{error.email}</p>}
                    <input name="password" value={password} onChange={this.handelChange}/>
                    {error.password && <p>{error.password}</p>}
                    <button onClick={this.handleClick}>Send</button>
                </div>
                {isShown && <div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                </div> }
            </form>
        );
    }


}

export default Form;
