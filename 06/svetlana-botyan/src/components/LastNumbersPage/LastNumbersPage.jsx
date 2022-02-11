import { contacts } from "../contacts/contatcs";
import {useHistory,useLocation, Link} from "react-router-dom"
import { nanoid } from 'nanoid'
import './style.scss';


const LastNumbersPage = () => {
    const {state} = useLocation()
    const history = useHistory() 

    const handleClick =()=> history.goBack() 
    
    const array=contacts.sort(() => 0.5 - Math.random()).slice(0, 5)
            
    return (
    <div className="info">
        <h3>Последние вызовы номера {state.phoneNumber}</h3>
        {array.map((item) => (            
                <div key={nanoid()} id={item.id} >
                    <Link to ={ {
                         pathname:`/phone:${item.id}`,
                         state:item
                         }                            
                    }>{item.phoneNumber}</Link>         
                </div>                            
            )) } 
        <button onClick={handleClick} >&larr; Назад</button>     
    </div>      
    )
   
}

export default LastNumbersPage
