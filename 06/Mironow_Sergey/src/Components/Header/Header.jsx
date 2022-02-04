import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss'

function Header(props){
    return (

        <div className = "Header" >
            <NavLink to = '/contacts' >Contacts by Name</NavLink>
            <NavLink to = '/numbers' >Contacts by Phone</NavLink>
        </div>

    )
}

export default Header