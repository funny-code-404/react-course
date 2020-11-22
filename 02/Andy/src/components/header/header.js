import React, { Component } from 'react';

import './style.scss';

class Header extends Component {
    render(){
    return (
        <header>
            <div className='container'>
            <nav className='navigation'>
                <a href='#top' id='logo'>My Site</a>
                <a href='#top'>Authors</a>
                <a href='#top'>Info</a>
                <a href='#top'>Contacts</a>
            </nav>
            </div>
        </header>
    )}
}

export default Header; 