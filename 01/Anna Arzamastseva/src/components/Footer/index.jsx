import React from 'react'

import './style.css';

class Footer extends React.Component{
 render(){
     return (
     <footer>
         <div className='container flex-wrapper'>
            <div>
                <p>Информация о компании</p>
            </div>
            <div>
                <p>Контакты</p>
            </div>
         </div>
         
     </footer>
     )
 }
}

export default Footer;