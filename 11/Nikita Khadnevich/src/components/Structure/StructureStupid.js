import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { indicator } from '../SmallElems/SmallElems'


export const StructureStupid = (props) => {
   const { children: item } = props
   const { structureInfo } = indicator
   return (
      <div key={'Items'+structureInfo} className={'items'+structureInfo} >
         <p key={item.name+structureInfo+'name'}>Имя: {item.name}</p>
         <p key={item.age+structureInfo}>Фракция: {item.age}</p>
         <p key={item.build_time+structureInfo}>Время постройки {item.build_time}</p>
         <p key={item.cost+structureInfo}>Стоимость: {item.cost.Wood} древесины</p>
         <p id='liHit' key={item.hit_points+structureInfo}>Единицы здоровья: {item.hit_points}</p>
         { item.pne_of_sight ? <p key={item.pne_of_sight+structureInfo}>Обзор: {item.pne_of_sight}</p> : null }
         <p key={item.armor+structureInfo}>Броня: {item.armor}</p>
         { item.special ? <p key={item.special+structureInfo}>Примечание: {item.special.join()}</p> : null }
      </div>
   )
};

export default StructureStupid