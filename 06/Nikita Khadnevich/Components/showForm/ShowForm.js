import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react'

const ShowForm = (props) => {
   const [name, setName] = useState(null)
   const [email, setEmail] = useState(null)
   const [pass, setPass] = useState(null)

   const handleName = (e) => {
      setName(e.target.value)
      console.log('name', name)
   }

   const handleEmail = (e) => {
      setEmail(e.target.value)
      console.log('email', email)
   }

   const handlePass = (e) => {
      setPass(e.target.value)
      console.log('pass', pass)
   }

   return (
      <>
         <input type="text" placeholder="Enter Name" name="name" onChange={handleName}/>
         <input type="text" placeholder="Enter Email" name="email" onChange={handleEmail}/>
         <input type="passwod" placeholder="Enter Password" name="pass" onChange={handlePass}/>
         {props.render( {name, email, pass} )}
      </>
   )
}

export default ShowForm