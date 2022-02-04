import React from "react";
import { NavLink } from "react-router-dom";
import './ContactList.scss'
import { contacts } from "../../data/contatcs";

function ContactList(props){
    const path = props.location.pathname

    return (
        <div className = "ContactList">
            {contacts.map((el) => {
                if (path === '/contacts') return (
                    <NavLink key={el.id} to = {{
                        pathname: '/contacts/' + el.name + el.surName,
                        state: {contact: el,}
                    }}>{el.name + el.surName}</NavLink>
                )
                if (path === '/numbers') return (
                    <NavLink key={el.id} to = {{
                        pathname: '/numbers/' + el.phoneNumber,
                        state: {contact: el,}
                    }}>{el.phoneNumber}</NavLink>
                )
            })}
        </div>
    )
}

export default ContactList