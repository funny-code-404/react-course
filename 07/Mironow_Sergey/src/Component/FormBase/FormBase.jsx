import React from "react";
import {useState} from 'react';
import styled from "styled-components";
import { withUser1 } from "../../HOC/withUser1";


function FormBase(props){
    const [name, useName] = useState(props.user ? props.user.name : '')
    const [mail, useMail] = useState(props.user ? props.user.mail : '')
    const [password, usePassword] = useState(props.user ? props.user.password : '')
    const ClearInputs = function(){useName(''); useMail(''); usePassword('');}


    const NameChange = (event) => useName(event.target.value)
    const MailChange = (event) => useMail(event.target.value)
    const PasswordChange = (event) => usePassword(event.target.value)


    return (
        <DivStyled>
            <input name = 'name' placeholder = 'Name' value = {name} onChange={NameChange}/>
            <input name = 'mail' placeholder = 'Mail' value = {mail} onChange={MailChange}/>
            <input name = 'password' placeholder = 'Password' value = {password} onChange={PasswordChange}/>
            {React.Children.map(props.children, (child, i) => {
                return React.cloneElement(child, {name, mail, password, ClearInputs: ClearInputs})
            })}
        </DivStyled>
    )

}




const DivStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 400px;
border: 1px solid black;
color: brown;
background-color: antiquewhite;
border: 1px solid brown;
padding: 25px 0;
& > input {
    width: 80%;
}`








export default withUser1(FormBase)