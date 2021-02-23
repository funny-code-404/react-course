
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import App from '../App'
import Home from './Home/Home'


export default class BasePage extends Component {
   constructor(props) {
      super(props)
      this.state = {
      }
   }

   render() {
      return (
         <div>
            <Router>
               <nav>
                  <Link to='/'> Home</Link>
                  <Link to='/map'> Map</Link>
               </nav>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/map' exact component={App} />
                  <Route exact path='/map/:index' component={App} />
               </Switch>
            </Router>
         </div>
      )
   }
}
