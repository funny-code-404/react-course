import React from  "react";

import './styles.css';
import logo from '../../logo.svg';
class Header extends React.Component {
    render() {
        return <header className="header">
        <div className="header-logo"> <img src={logo}/></div>   
        <nav className="nav">
<ul>
   <li><a href="/">Главная</a></li>
   <li><a href="/">Услуги</a></li>
   <li><a href="/">Оплата</a></li>
   <li><a href="/">Контакты</a></li>  
</ul>
        </nav>
    
     
    </header>
    }
}

export default Header;