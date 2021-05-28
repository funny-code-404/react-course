import React from 'react';
import { REGISTRATION, ENTRY, DELETE } from '../../ducks/dynamic';

import Registration from "../Regestration";
import Entry from "../Entry";
import Delete from "../Delete";

import './Form.css'

const Form = (props) => {
  const handleClick = (e) => {
    const { registrationForm, entryForm, deleteForm } = props;
    const { name} = e.target;

    switch (name) {
      case "reg": registrationForm()
          break;
      case "entry": entryForm()
          break;
      case "delete": deleteForm()
          break;
        default: return null
    }

  };
    const { dynamicForm } = props.counter;

    return(
        <div>
        <button name="reg" onClick={handleClick}>Registration</button>
        <button name="entry" onClick={handleClick}>Entry</button>
        <button name="delete" onClick={handleClick}>Delete</button>

            <div className='forms'>
                <input placeholder="Имя" />
                <input placeholder="Email" />
                <input placeholder="Пароль"/>
            </div>
            {dynamicForm === REGISTRATION ? <div><Registration /></div> : null}
            {dynamicForm === ENTRY ? <div><Entry /></div> : null}
            {dynamicForm === DELETE ? <div><Delete /></div> : null}

        </div>
      )

}

export default Form;