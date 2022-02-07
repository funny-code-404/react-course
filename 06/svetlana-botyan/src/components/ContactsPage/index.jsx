/* eslint-disable react/jsx-no-undef */
import { contacts } from "../contacts/contatcs";
import {Link} from "react-router-dom"
import { nanoid } from 'nanoid'
import './style.scss'

const ContactsPage = ()=>{
    return (
        <div> 
            <h1>Телефонная книга</h1>
            <div className="items">         
            <ul>
                <h2>Имя</h2>
                {contacts.map((contact)=>(
                    <li key = {nanoid()}>                        
                        <Link to ={
                            {
                            pathname:`/name:${contact.id}`,
                            state:contact 
                            }                            
                        }>   {contact.name}                         
                        </Link>
                    </li>
                ))}
            </ul>
            <ul>
                <h2>Номера телефонов</h2>
                {contacts.map((contact)=>(
                    <li key = {nanoid()}>                        
                        <Link to ={
                            {
                            pathname:`/phone:${contact.id}`,
                            state:contact 
                            }                            
                        }>{contact.phoneNumber}                            
                        </Link>
                    </li>
                ))}
            </ul>
            </div>  
        </div>
    )

}

export default ContactsPage