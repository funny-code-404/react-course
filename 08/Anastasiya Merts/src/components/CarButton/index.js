import { useHistory } from "react-router-dom";
import { CarName, } from '../styles';

const CarButton = ( { name, id } ) => {
    const history = useHistory();
    
    const handleClick = (e) => {
        console.log("ID", e.target.id);
        history.push(`/${id}`)
    }
    
    return (
        <CarName id={id} onClick={handleClick} >
            {name}
        </CarName>
    );
}

export default CarButton;