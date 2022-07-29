import { memo } from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from './styles';

const Navmenu = () => {
    return (
        <StyledMenu className='nav__menu'>
            <span><Link to={'/hotels'} className='nav__link nav__link--active'>Stays</Link></span>
            <span><Link to={'/hotels'} className='nav__link'>Attractions</Link></span>
        </StyledMenu>
    );
};

export default memo(Navmenu);