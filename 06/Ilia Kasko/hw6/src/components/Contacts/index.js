import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {users} from '../Data'
import Person from "../Person";

const Contacts = (props) => {

    const history = useHistory()
    const { isContact } = useLocation();


    const handleClick = (e) => {
        const id = e.target.id
        history.push(`contacts/${id}`)
    }

    return(

        <div>
            <h1>
                {isContact ?"Contacts": "Numbers"}
            </h1>
            {users.map((user, i) => (

                <Person id={user.id} isContact={isContact} onClick={handleClick}/>
            ))}
        </div>
    )
}

export default Contacts;