import React from 'react'
import { useContext } from 'react';
import  DataContext from '../Context/DataContext'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Home = () => {
   const {testCar}= useContext(DataContext)
   console.log('Home Map', testCar)

   return (
      <>
      </>
   )
}

export default Home;