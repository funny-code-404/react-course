/* eslint-disable import/no-unresolved */
import { useHistory,useLocation, Link } from "react-router-dom"
import Friends from "../Friends/index"
import './style.scss';

const ContactInfoPage =()=>{
    const history = useHistory()
    const {pathname, state} = useLocation() 
    const condition = pathname===`/name:${state.id}`    

    const handleClick =()=> history.goBack() 

    const infoAboutName =<div id={state.id}>
                <h3>Номер телефона {state.name}</h3>
                    <Link to ={ {
                     pathname:`/name:${state.id}/lastNumbers`,
                     state:state
                     }                            
                     }>{state.phoneNumber} </Link>
                <h4>Список имен друзей {state.name}</h4>
                <Friends condition={condition} friends={state.friends}/>
                <button onClick={handleClick} >&larr; Назад</button>
                </div> 

    const infoAboutNumber =<div id={state.id}>
                        <h3>Имя владельца {state.phoneNumber}</h3>
                        <p>{state.name}</p>
                        <h4>Список номеров друзей</h4>
                        <Friends condition={condition} friends={state.friends}/>
                        <button onClick={handleClick} >&larr; Назад</button>
                        </div>   

    
    return  <div className="info"> {condition ? infoAboutName :infoAboutNumber}</div>

}

export default ContactInfoPage