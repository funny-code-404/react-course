import React from 'react';

import { LINK_TEXT } from './consts';
import './style.css';

import logo from '../../logo.svg';

class Header extends React.Component{
 render(){
    const data = [LINK_TEXT, LINK_TEXT, LINK_TEXT, LINK_TEXT, LINK_TEXT]
     return (

     <header>
         <div className='container flex-wrapper'>
            <div><img src={logo} alt='logo' width='100' /></div>
            <div>
                <nav>
                    <ul className='flex-wrapper'>
                        {
                            data.map((item, i) => <li key="item"><a href="#">{item + ' ' + i}</a></li>)
                        }
                    </ul>   
                </nav>
            </div>
         </div>   
     </header>
     )
 }
}

export default Header;