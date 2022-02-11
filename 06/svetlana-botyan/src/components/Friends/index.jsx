import { contacts } from "../contacts/contatcs";
import {Link} from "react-router-dom"
import { nanoid } from 'nanoid'


const Friends = ({condition, friends}) => {
    
const listNumber = friends.map((item)=> (
                    contacts.map((contact) => (contact.id ===item &&
                    <div key={nanoid()} id={contact.id} >
                          <Link to ={ {
                            pathname:`/phone:${contact.id}`,
                            state:contact
                            }                            
                         }>{contact.phoneNumber}</Link>         
                    </div>
                    ))
                 ))


const listName = friends.map((item)=> (
                 contacts.map((contact) => (contact.id ===item &&
                 <div key={nanoid()} id={contact.id} >
                     <Link to ={ {
                        pathname:`/name:${contact.id}`,
                        state:contact
                        }                            
                    }>{contact.name}</Link>         
                </div>
               ))
            ))

            
    return  condition ?  listName : listNumber 
   
}

export default Friends
