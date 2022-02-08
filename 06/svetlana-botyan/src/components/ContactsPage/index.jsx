/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
import { contacts } from "../contacts/contatcs";
import ListItem from "../ListItem"
import { nanoid } from 'nanoid';
import './style.scss';

const ContactsPage = ()=>{
    return (
        <div> 
            <h1>Телефонная книга</h1>
            <div className="items">         
            <ul>
                <h2>Имя</h2>
                {contacts.map((contact)=>(
                    <ListItem key = {nanoid()} pathname={`/name:${contact.id}`}
                    state={contact} content ={contact.name}  />                    
                ))}
            </ul>
            <ul>        
  
                <h2>Номера телефонов</h2>
                {contacts.map((contact)=>(                    
                    <ListItem key = {nanoid()} pathname={`/phone:${contact.id}`}
                    state={contact} content ={contact.phoneNumber} />                   
               ))}
            </ul>
            </div>  
        </div>
    )

}

export default ContactsPage