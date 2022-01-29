import React from 'react';

import { LINK_TEXT } from './consts';
import './style.css';

import logo from '../../logo.svg';

class Header extends React.Component{
 render(){
     
     return (

     <header>
         <div className='container flex-wrapper'>
            <div><img src={logo} alt='logo' width='100' /></div>
            <div>
                <nav>
                    <ul className='flex-wrapper'>
                        {
                            new Array(5).fill(LINK_TEXT).map((item, i) => <li key="item"><a href="#">{item + ' ' + i}</a></li>)
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