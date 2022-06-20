import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='container nav__container'>
                <a href='#' className='nav__logo'><h1 className='nav__logotype'>TripHouse</h1></a>
                <div className='nav__menu'>
                    <a className='nav__stays'>Stays</a>
                    <a className='nav__attractions'></a>
                </div>
                <div className='nav__tools'>
                    <label className="nav__toggle-theme">
                        <input type="checkbox" className="nav__checkbox" id="input"/>
                        <span className="nav__check"></span>
                    </label>
                    <a className='nav__login'></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;