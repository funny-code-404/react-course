import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { ACTION_GET_STRU_Requested } from '../../ducks/structures/actions';
import { StructuresData } from '../../ducks/structures/selectors'
import  { baseUrl, Urlpath } from '../Api/Api'


const StructureInfo = (props) => {
   const { structures } = Urlpath
   const dataStru = useSelector(StructuresData)
   const  dispatches = useDispatch()

   const getFetch = (url, path, arr) => {
      if ( Boolean(arr) == false) {
        dispatches(ACTION_GET_STRU_Requested(`${url}/${path}`));
      } else null
   }
  
   useEffect(() => {
      getFetch(baseUrl, structures, dataStru)
   }, []);

   const handleLocation = () => {
      window.history.go(-1)
   }

   const params = props.match.params.id

   return ( 
   <>
      <p id='gobackStru' onClick={handleLocation}>Вернуться назад</p>
      {dataStru && dataStru.map((item, i) => {
         if (params === item.name) {
            return (
               <div className='StruItemDetail' >
                  <p>Имя: {item.name}</p>
                  <p>Фракция: {item.age}</p>
                  <p>Время постройки {item.build_time}</p>
                  <p>Стоимость: {item.cost.Wood} древесины</p>
                  <p>Запас здоровья: {item.hit_points}</p>
                  <p>Обзор: {item.pne_of_sight}</p>
                  <p>Броня: {item.armor}</p>
                  <p>Примечание: {item.special?.join()}</p>
               </div>
            )
         } 
      })}
   </>
   )
}

export default StructureInfo


