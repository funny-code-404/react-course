import React from 'react'

import Article from './Article'

import './style.css';

class Main extends React.Component{
 render(){
     return (
    <main>
         <div className='container flex-wrapper'>
            <Article />
            <Article />
            <Article />
         </div>
         
     </main>
     )
     
 }
}

export default Main;