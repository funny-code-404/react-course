import React from 'react';
import ReactDOM from 'react-dom';
import ShowForm from '../showForm/ShowForm'
import { useState } from 'react'


const Rone = () => {
   const [name, setName] = useState(null)
   const [email, setEmail] = useState(null)
   const [pass, setPass] = useState(null)
   const [secondName, setsecondName] = useState(null);
   const [birth, setBirth] = useState(null);
   const [telNumb, settelNumb] = useState(null);

   const handlesecondName = (e) => {
      setsecondName(e.target.value)
      console.log('secondName', secondName)
   }

   const handlebirth = (e) => {
      setBirth(e.target.value)
      console.log('birth', birth)
   }

   const handletelNumb = (e) => {
      settelNumb(e.target.value)
      console.log('telNumb', telNumb)
   }

   const PropsToState = (name, email, pass) => {
      setName(name)
      setEmail(email)
      setPass(pass)
   }

   return (
      <>
        <div className='myForm'>
            <form>
            <ShowForm render={( {name, email, pass} ) => {
               console.log(name, email, pass);
               PropsToState(name,email,pass)
                  return(
                     <>
                     <h4>Registration</h4>
                     <input id='cheker'type="checkbox" name="option1" value="a2"/>
                     <input type="text" placeholder="Enter Second Name" name="name" onChange={handlesecondName}/>
                     <input type="text" placeholder="Enter Birh Year" name="email" onChange={handlebirth}/>
                     <input type="text" placeholder="Enter Number" name="pass" onChange={handletelNumb}/>
                     <button>Register</button>
                     </>
                  )   
               }}
            />
            </form>
         </div>
         {/* {props.render( {name, email, pass, secondName, birth, telNumb} )} */}
      </>
   )
}

export default Rone 