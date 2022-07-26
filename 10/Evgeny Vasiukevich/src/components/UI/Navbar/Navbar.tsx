import React, { memo, MouseEventHandler, useRef, useState } from 'react';
import Navmenu from './Navmenu';
import { StyledNav } from './styles';
import iconLogotype from '../../../assets/icons/icon-logotype.svg';
import Navtools from './Navtools';
import MobileMenu from '../Buttons/MobileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isClick, setIsClick] = useState<boolean>(false);

    const handleClick = () => setIsClick(!isClick);
    
    return (
        <StyledNav isMenuClick={isClick} className='nav'>
            <div className='nav__container'>
                <Link to={'/hotels'} className='nav__logo'>
                    <img src={iconLogotype} alt='TripHouse' className='nav__logotype'/>
                </Link>
                <Navmenu/>
                <Navtools/>
                <MobileMenu isClick={isClick} onClick={handleClick}/>
            </div>
        </StyledNav>
    );
};

export default memo(Navbar);