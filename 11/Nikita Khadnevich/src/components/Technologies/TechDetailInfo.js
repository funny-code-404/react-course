import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { ACTION_GET_TECH_DETAIL_Succeed, ACTION_GET_TECH_DETAIL_FAILED, ACTION_GET_TECH_FAILED } from '../../ducks/technologies/actions'
import { TechData, TechDataDetail, TechError, TechisFetching } from '../../ducks/technologies/selectors'
import { Errors } from '../About/About'

const TechDetailInfo = (props) => {
   const data = useSelector(TechData)
   const dataDetail= useSelector(TechDataDetail)
   const fetchStatus = useSelector(TechisFetching);
   const getError = useSelector(TechError);

   const  dispatches = useDispatch()
   
   const handleLocation = () => {
      window.history.go(-1)
      dispatches(ACTION_GET_TECH_DETAIL_FAILED([]))
      dispatches(ACTION_GET_TECH_FAILED([]))
      dispatches(ACTION_GET_TECH_DETAIL_Succeed([]))
   }

   return (
      <>
         {(dataDetail.id && !fetchStatus) ? 
            <ul id='Skils' key={Math.random()}>
               <button key={Math.random()} id='CloseDetail' onClick={handleLocation}>X</button>
               <ul key={Math.random()}>
                  <li key={Math.random()}>Имя: {dataDetail?.name}</li>
                  <li key={Math.random()}>Фракция: {dataDetail?.age}</li>
                  <li key={Math.random()}>Стоимость постройки: {dataDetail?.cost?.Wood} древесины</li>
                  <li key={Math.random()}>Защита: {dataDetail?.armor}</li>
                  <li key={Math.random()}>Время постройки: {dataDetail?.build_time}</li>
                  <li key={Math.random()}>Стоимость: {dataDetail?.cost?.Wood} древесины, {dataDetail?.cost?.Gold} золота</li>
                  <li key={Math.random()}>Единицы здоровья: {dataDetail?.hit_points}</li>
               </ul>
            </ul>
         :  (!fetchStatus) ?
            <div id='Skils'>
               <Errors />
               <button key={Math.random()} id='CloseDetail' onClick={handleLocation}>X</button>
            </div>         
         : null }
      </>
   )
}
   
export default TechDetailInfo
