import React from 'react'

import { COMPANY_INFO } from './consts';
import { CONTACTS } from './consts';

import './style.css';

class Footer extends React.Component{
 render(){
     return (
     <footer>
         <div className='container flex-wrapper'>
            <div>
                <p>{COMPANY_INFO}</p>
            </div>
            <div>
                <p>{CONTACTS}</p>
            </div>
         </div>
         
     </footer>
     )
 }
}

export default Footer;