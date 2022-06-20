import React from 'react';
import Navmenu from './Navmenu';
import { StyledNav } from './styles';
const iconSignIn = require('../../../assets/icons/icon-sign-in.svg');
const iconNight = require('../../../assets/icons/icon-night.svg');
const {iconLogotype} = require('../../../assets/icons/icon-logotype.svg');

const Navbar = () => {
    return (
        <StyledNav className='nav'>
            <div className='container nav__container'>
                <a href='#' className='nav__logo'>
                    <img src={iconLogotype} alt='TripHouse' className='nav__logotype'/>
                </a>
                <Navmenu/>
                <div className='nav__tools'>
                    <label className="nav__toggle-theme">
                        <input type="checkbox" className="nav__checkbox" id="input"/>
                        <span className="nav__check">
                            <img src={iconNight} alt="Night theme" className='nav__check-icon'/>
                        </span>
                    </label>
                    <a className='nav__login'>
                        <img src={iconSignIn} alt="Sign-in/out" className='nav__login-icon'/>
                    </a>
                </div>
            </div>
        </StyledNav>
    );
};

export default Navbar;