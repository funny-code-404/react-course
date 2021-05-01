import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { indicator, ButtonClose } from '../SmallElems/SmallElems'
const { civil, civInfo, civDetailinfo, civilStupid } = indicator
import { Civilerror } from '../../ducks/civil/selectors'


export const CivilInfoStupid = (props) => {
   const { children: [item, urlCiv, handleclick, civilizations] } = props

   return (
      <>
         <p key={item.name+civilStupid}>Имя: {item.name}</p>
         <p key={item.expansion+civilStupid}>Класс война: {item.expansion}</p>
         <p key={item.army_type+civilStupid}>Тип Армии: {item.army_type}</p>
         <p key={item.team_bonus+civilStupid}>Командный бонус: {item.team_bonus}</p>

         {(item.unique_unit && item.unique_unit[0]) ? item.unique_unit.map((linkUnit,i) => {
         return (
            <div key={'CivilsItem'+civilStupid+i} className={civilizations+'Item'}>
               <Link to={`${urlCiv}/unique_unit`} id='unique_unit' onClick={handleclick} data-path={linkUnit}>{i+1}. Уникальный юнит {item.name}</Link>
            </div>
            )
            }) : 
            <div key={'CivilsItemUnit'+civilStupid} className={civilizations+'NoItem'}>
               <p>У цивилизации нет уникальных юнитов</p>
            </div>
         }

         { (item.unique_tech && item.unique_tech[0]) ? item.unique_tech.map((linkTech,i) => {
               return (
               <div key={'CivilsItem2'+civilStupid+i} className={civilizations+'Item2'}>
                  <Link to={`${urlCiv}/unique_tech`} id='unique_tech' onClick={handleclick} data-path={linkTech}>{i+1}. Уникальная технология {item.name}</Link>
               </div>
               )
            }) :  
            <div key={'CivilsItemNoTech'+civilStupid} className={civilizations+'NoItem'}>
               <p>У цивилизации нет уникальных технологий</p>
            </div>
         }
      </>
   )
};

export const CivilUnitDetailStupid = (props) => {
   const { children: [$, handleLocation] } = props
   const { civDetailinfo } = indicator
   return (
      <>
      <ul key={'Skils'+civDetailinfo} id='Skils'>
         <ButtonClose handleLocation={handleLocation} idName={'Skils'} indicator={civDetailinfo} selector={Civilerror} />
         <li>Имя: {$.name}</li>
         <li >Фракция: {$.age}</li>
         <li >Броня: {$.armor}</li>
         <li >Атака: {$.attack}</li>
         <li id='liHit'>Единицы доровья: {$.hit_points}</li>
         <li >Скорость перемещения: {$.movement_rate}</li>
         <li >Время перезарядки: {$.reload_time}</li>
         <li >Дальность видимости: {$.line_of_sight}</li>
         {  $.attack_bonus ? <ul key={'AttackBonus'+civDetailinfo} className='AttackBonus'> 
            <li >Бонус к атаке:</li>
            {$.attack_bonus && $.attack_bonus.map((item, i) => {
               return (
                  <li key={item+civDetailinfo}>{item}</li>
                  )
               })
            }
         </ul> : null }
      </ul>
   </>
   )
}

export const CivilTechDetailStupid = (props) => {
   const { children: [$, handleLocation] } = props
   const { civDetailinfo } = indicator
   return (
      <>
         <ul key={'Skils'+civDetailinfo} id='Skils'>
            <ButtonClose handleLocation={handleLocation} idName={'Skils'} indicator={civDetailinfo} selector={Civilerror} />
            <li>Имя: {$.name}</li>
            <li>Фракция: {$.age}</li>
            <li>Описание: {$.description}</li>
            <li>Атака: {$.expansion}</li>
            { $.cost.Food || $.cost.Gold ? <li>Стоимость постройки: {`${$.cost.Food} еды`} , {`${$.cost.Gold} золота`}</li> : null }
            <li>Время постройки: {$.build_time}</li>
         </ul>
      </>
   )
}

export default CivilInfoStupid