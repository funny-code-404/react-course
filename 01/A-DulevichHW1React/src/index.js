import React from 'react';
import reactDom from 'react-dom';
import Container from './container/container'
import './container/style.css'
import './IT-MyFreedom/style.css'
import Main from './main/main'

// import {render} from 'react-dom';
// import {Container} from './container/container'
// function Por () {
    
//     return (
//        <header>
//       <Container/>
//        </header>
//     )
    
// }
// render (<Por/>, document.getElementById('root'));
class App extends React.Component{
    render() {
        return (
            <body>
        <Container/>
         <Main/> 
        </body>
        )
    }
}

reactDom.render(<App/>, document.getElementById('root'));