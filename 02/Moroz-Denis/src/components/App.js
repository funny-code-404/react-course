import React from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';

import { sidebars, cards } from '../data'
import './App.css'


  function App () { 
    return (
        <div className = 'container'>
            <Sidebar sidebars={sidebars}/>
            <Main cards={cards}/>
        </div>
 )
}

export default App;
