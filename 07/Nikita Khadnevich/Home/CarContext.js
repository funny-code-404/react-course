import React from 'react'
import { useContext, useState, useEffect } from 'react';
import  DataContext from './Context/DataContext'
import Cars from './Components/Cars'
import Home from './Components/Home'
import CarsRender from './Components/CarsRender'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function CarContext(props) {
   const {testCar}= useContext(DataContext)

   return (
      <>
          <h3> Добро пожаловать на наш каталог автомобилей</h3>
         <Router>
            <div className='testCar'>
               <div className='navigation'>
               <Link to='/home'>Home</Link>
               <Link to='/cars'>Cars</Link>
                </div>
               <Switch>
                  <Route path='/home' exact component={Home} />
                  <Route exact path='/cars' component={Cars} />
                  <Route path='/cars/:id' component={CarsRender} />
               </Switch>
            </div>
         </Router>
      </>
   )
}

export default CarContext


// {testCar.map((item, index) => {
//    return (
//    <div id={item.name} key={item.id}><Link to={item.name}>{item.name}</Link></div>
//    )})}