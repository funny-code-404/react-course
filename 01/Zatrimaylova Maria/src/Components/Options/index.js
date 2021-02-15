import React from 'react';
import './style.css'
import Logo from './img/Logo.png';

class Options extends React.Component {
    render() {
        return (
            <div className="header__options">
                <div className="options__info">
                    <div className="info__logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className="info__lang">
                        <p className="lang__title">Eng</p>
                        <p className="lang__title">Рус</p>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Options;