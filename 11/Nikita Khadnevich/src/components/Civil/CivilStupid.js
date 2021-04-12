
import React from 'react'
import { useState, useSelector } from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export const random = () => {
   Math.random()
}

const CivilInfoStupid = (props) => {
   const { children: [item, urlCiv, handleclick] } = props
   return (
      <>
         <p key={random()}>Имя: {item.name}</p>
         <p key={random()}>Класс война: {item.expansion}</p>
         <p key={random()}>Тип Армии: {item.army_type}</p>
         <p key={random()}>Командный бонус: {item.team_bonus}</p>

         <div key={Math.random()} className='CivilsItem'>
            <Link key={Math.random()} to={`${urlCiv}/unique_unit`} id={item.id} onClick={handleclick} data-path='unique_unit'>Уникальный юнит {item.name}</Link>
         </div>
         <div key={Math.random()} className='CivilsItem2'>
            <Link key={Math.random()} to={`${urlCiv}/unique_tech`} id={item.id} onClick={handleclick} data-path='unique_tech'>Уникальная технология {item.name}</Link>
         </div>
      </>
   )
}
export default CivilInfoStupid