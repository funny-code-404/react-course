import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'

export default class TableRender extends Component {
   constructor(props) {
      super(props)
      this.state = {
      }
   }

   render() {
      const { table } = this.props
      return (
         <>
         <div className='Block'>
               {table.map((item, index) => {
               return (
               <li id={item}>
                  <NavLink exact to={`/map/${index}`}
                  activeStyle={{backgroundColor:"#00554e", color:"#d8d8d8", fontWeight:"bold", padding: '10px'}}>{item}</NavLink>
               </li>
            )})
            }
         </div>
         </>
      )
   }
}
