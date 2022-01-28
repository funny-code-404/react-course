import React from 'react';
// import logo from './images/logo.png'

import './style.css'

class Header extends React.Component {

    render() {
        const url = '#';
        const dataNav = ['О нас', 'Туры','Визы','Агентам', 'Контакты']

      return (
        <header>
            <div className="container flex-header">
                {/* <a className="logo" href={url}><img src={logo} alt="logo"/></a>                 */}
                <nav>
                    <ul>
                        {dataNav.map((item) => 
                        (
                          <li key={item}><a href={url}>{item}</a></li>                        
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
      );
    }
  }
  
  export default Header;