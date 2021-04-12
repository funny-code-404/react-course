import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { CivildataDetail, CivilisFetching, Civilpath, Civilerror } from '../../ducks/civil/selectors'
import { ACTION_GET_CIVIL_DETAIL_Succeed, ACTION_GET_CIVIL_DETAIL_FAILED, ACTION_GET_CIVIL_FAILED } from '../../ducks/civil/actions'
import { random } from './CivilStupid'
import { Errors } from '../About/About'


const CivDetailInfo = (props) => {
   const $ = useSelector(CivildataDetail);
   const fetchStatus = useSelector(CivilisFetching);
   const path = useSelector(Civilpath)
   const  dispatches = useDispatch()
   
   const handleLocation = () => {
      window.history.go(-1)
      dispatches(ACTION_GET_CIVIL_DETAIL_Succeed([]))
      dispatches(ACTION_GET_CIVIL_DETAIL_FAILED())
   }

   return (
      <>
         {
         ($.id && !fetchStatus && path == 'unique_unit') ? 
            <ul key={random} id='Skils'>
               <button key={random} onClick={handleLocation}>X</button>
               <li key={random}>Имя: {$.name}</li>
               <li key={random}>Фракция: {$.age}</li>
               <li key={random}>Броня: {$.armor}</li>
               <li key={random}>Атака: {$.attack}</li>
               <li key={random}>Уровень здоровья: {$.hit_points}</li>
               <li key={random}>Скорость перемещения: {$.movement_rate}</li>
               <li key={random}>Время перезарядки: {$.reload_time}</li>
               <li key={random}>Дальность видимости: {$.line_of_sight}</li>
               <ul  key={random}className='AttackBonus'> 
                  <li key={random} >Бонус к атаке:</li>
                  {$.attack_bonus && $.attack_bonus.map((item, i) => {
                     return (
                        <li key={random}>{item}</li>
                        )
                     })
                  }
               </ul>
            </ul>
         : ($.id && !fetchStatus && path == 'unique_tech') ?
            <ul id='Skils'>
               <button onClick={handleLocation}>X</button>
               <li>Имя: {$.name}</li>
               <li>Фракция: {$.age}</li>
               <li>Описание: {$.description}</li>
               <li>Атака: {$.expansion}</li>
               <li>Стоимость постройки: {`${$.cost?.Food} еда`} , {`${$.cost?.Gold} золото`}</li>
               <li>Время постройки: {$.build_time}</li>
            </ul>
         : (!$.id && !fetchStatus) ?
            <ul key={random} id='Skils'>
               <button onClick={handleLocation}>X</button>
               <li>У цивилизации нет уникального юнита </li>
            </ul> 
         : (!fetchStatus) ?
         <ul key={random} id='Skils'>
            <button onClick={handleLocation}>X</button>
            <Errors />
         </ul>
         : null
         }
      </>
   )
}

export default CivDetailInfo
