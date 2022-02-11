import React from "react";
import { NavLink } from "react-router-dom";
import { contacts } from "../../data/contatcs";
import './ContactCard.scss';

function ContactCard(props){
    const card = {
        path: props.location.pathname,
        contact: props.location.state.contact,
        get name(){
            return /-\d\d\d-\d{2,4}$/.test(card.path) ? 'phoneCard' : 'namedCard'
        },
        get isPhoneCard() {
            return card.name === 'phoneCard'
        },
        get isNamedCard() {
            return card.name === 'namedCard'
        }
               
    }

    const handleClick = () => props.history.goBack()

    return (
        <div className="ContactCard">
            <h3>{card.contact.name + ' ' + card.contact.surName + ':'}</h3>
            <NavLink to = {{pathname: `/numbers/${card.contact.phoneNumber}/recentcalls`, state: {contact: card.contact}}}>{card.contact.phoneNumber}</NavLink>
            <div className="cardList">
                <h4>{card.isPhoneCard ? 'Phones List:' : 'Friends List:'}</h4>
                {card.contact.friends.map((friendId) => {
                    return contacts.map((contact) => {
                        if (friendId === contact.id){
                            return <NavLink key={contact.id}
                                        to = {{
                                                pathname: card.isPhoneCard ? `/numbers/${contact.phoneNumber}` : `/contacts/${contact.name + contact.surName}`,
                                                state: {contact: contact,},
                                        }}
                                   >{card.isPhoneCard ? contact.phoneNumber : contact.name + ' ' + contact.surName}</NavLink>
                        }
                    })
                })}
            </div>
            <button onClick={handleClick}>Go BACK</button>
        </div>
    )
}

export default ContactCard