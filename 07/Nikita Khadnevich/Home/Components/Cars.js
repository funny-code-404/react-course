import React from 'react'
import { useContext } from 'react';
import  DataContext from '../Context/DataContext'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Cars = () => {
   const {testCar}= useContext(DataContext)

   return (
      <>
         <div className='ListCar'>
            {testCar.map((item, index) => {
               return (
               <div id={item.name} key={item.id}><Link to={`/cars/${item.name}`}>{item.name}</Link></div>
               )})}
         </div>
      </>
   )
}

export default Cars;
