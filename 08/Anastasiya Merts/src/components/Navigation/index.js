import { Link } from 'react-router-dom';
import { Nav } from '../styles';
const Navigation = () => {
    return(
        <Nav>
            <Link exact to="/">Home</Link>
        </Nav>
    );
}

export default Navigation