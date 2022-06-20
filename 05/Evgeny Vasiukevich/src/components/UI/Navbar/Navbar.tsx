import React, { MouseEventHandler, useRef, useState } from 'react';
import Navmenu from './Navmenu';
import { StyledNav } from './styles';
import iconLogotype from '../../../assets/icons/icon-logotype.svg';
import Navtools from './Navtools';
import MobileMenu from '../Buttons/MobileMenu';

const Navbar = () => {
    const [isClick, setIsClick] = useState<boolean>(false);

    const handleClick = () => setIsClick(!isClick);
    
    return (
        <StyledNav isMenuClick={isClick} className='nav'>
            <div className='nav__container'>
                <a href='#' className='nav__logo'>
                    <img src={iconLogotype} alt='TripHouse' className='nav__logotype'/>
                </a>
                <Navmenu/>
                <Navtools/>
                <MobileMenu isClick={isClick} onClick={handleClick}/>
            </div>
        </StyledNav>
    );
};

export default Navbar;