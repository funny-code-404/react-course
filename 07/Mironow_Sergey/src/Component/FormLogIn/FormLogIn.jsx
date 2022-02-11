import React from "react"
import {useState} from 'react'
import styled from "styled-components"

function FormLogIn(props){
    const {name, mail, password} = props
    const [keepLogIn, useKeepLogIn] = useState(false)

    const KeepLogInChange = (event) => useKeepLogIn(!keepLogIn)

    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log({name, mail, password, keepLogIn})
        props.ClearInputs()
        useKeepLogIn('')

    }

    return (
        <FormStyled onSubmit={HandleSubmit}>
            <h3>Log-in:</h3>
            <label><input type = 'checkbox' name = 'agreed' checked = {keepLogIn} onChange={KeepLogInChange}/>Keep LogIn</label>
            <button onSubmit={HandleSubmit}>Register</button>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    input[type = 'checkbox']{
        align-self: flex-start;
    }
    button {
        color: brown;
        background-color: rgb(230, 230, 250);
    }

`

export default FormLogIn