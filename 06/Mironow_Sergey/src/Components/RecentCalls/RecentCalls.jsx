import React from "react";
import './RecentCalls.scss'
import { NavLink } from "react-router-dom";
import { contacts } from "../../data/contatcs";



function RecentCalls(props){
    const knownPhones = contacts.map((el) => el.phoneNumber)
    const randInt = (min, max) => Math.floor(Math.random() * (max - min)) + min
    const randNumber = () => knownPhones[randInt(0, 20)]

    return (
        <div className = "RecentCalls">
            <h3>Recent Calls:</h3>
            {[randNumber(), randNumber(), randNumber(), randNumber(), randNumber()].map((el, i) => (<NavLink to = {{
                pathname: `/numbers/${el}`,
                state: {contact: contacts.find((cont) => cont.phoneNumber === el),}
            }}>{el}</NavLink>))}
        </div>
    )
}

export default RecentCalls
