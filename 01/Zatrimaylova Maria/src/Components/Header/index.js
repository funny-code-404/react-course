import React from 'react';
import './style.css';

class Header extends React.Component {
    render() {
        return (
            <header className="container__header">
                <div className="header__gradient">
                    {this.props.children}
                </div>
            </header>
        )
    }
}

export default Header;