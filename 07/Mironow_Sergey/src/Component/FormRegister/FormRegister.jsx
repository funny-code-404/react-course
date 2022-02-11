import React from "react"
import {useState} from 'react'
import styled from "styled-components"


function FormRegister(props){
    const {name, mail, password} = props
    const [trueName, useTrueName] = useState('')
    const [age, useAge] = useState('')
    const [phone, usePhone] = useState('')
    const [agreed, useAgreed] = useState(false)

    const NameChange = (event) => useTrueName(event.target.value)
    const MailChange = (event) => useAge(event.target.value)
    const PasswordChange = (event) => usePhone(event.target.value)
    const AgreedChange = (event) => useAgreed(!agreed)

    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log({name, mail, password, trueName, age, phone})
        useTrueName(''); useAge(''); usePhone(''); useAgreed(!agreed);
        props.ClearInputs()
    }

    return (
        <FormStyled onSubmit={HandleSubmit}>
            <h3>Registration:</h3>
            <input type = 'checkbox' name = 'agreed' checked = {agreed} onChange={AgreedChange}/>
            <input truename = 'userName' placeholder = 'True Name' value = {trueName} onChange={NameChange}/>
            <input name = 'userAge' placeholder = 'Age' value = {age} onChange={MailChange}/>
            <input name = 'userPhone' placeholder = 'Phone' value = {phone} onChange={PasswordChange}/>
            <button disabled = {!agreed} onSubmit={HandleSubmit}>Register</button>
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
    button[disabled] {
        background-color: rgba(230, 230, 250, 0.5);
    }




`

export default FormRegister