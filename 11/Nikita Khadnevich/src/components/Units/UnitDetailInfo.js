import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_CIVIL_DETAIL_Succeed } from '../../ducks/civil/actions'
import { UnitsdataUnitDetail,  UnitsisFetching} from '../../ducks/units/selectors'


const UnitDetailInfo = (props) => {
   const dataUnitDetail = useSelector(UnitsdataUnitDetail)
   const fetchStatus = useSelector(UnitsisFetching);

   const  dispatches = useDispatch()
   
   const handleLocation = () => {
      window.history.go(-1)
      dispatches(ACTION_GET_CIVIL_DETAIL_Succeed([]))
   }

   return (
      <>
         {(dataUnitDetail[0] && !fetchStatus ) ? 
            <ul id='Skils'>
               <button id='CloseDetail' onClick={handleLocation}>X</button>
               {dataUnitDetail.map((item, i) => {
                  return (
                     <ul>
                        <li>Имя: {item.name}</li>
                        <li>Фракция: {item.age}</li>
                        <li>Время постройки: {item.build_time}</li>
                        <li>Стоимость постройки: {item.cost.Wood} древесины</li>
                        <li>Защита: {item.armor}</li>
                        <li>Единицы здоровья: {item.hit_points}</li>
                     </ul>
                     )
                  })
               }
            </ul>
         : (dataUnitDetail.id && !fetchStatus) ?
            <ul id='Skils'>
               <button id='CloseDetail' onClick={handleLocation}>X</button>
               <ul>
                  <li>Имя: {dataUnitDetail.name}</li>
                  <li>Фракция: {dataUnitDetail.age}</li>
                  <li>Время постройки: {dataUnitDetail.build_time}</li>
                  <li>Стоимость постройки: {dataUnitDetail.cost.Wood} древесины</li>
                  <li>Защита: {dataUnitDetail.armor}</li>
                  <li>Единицы здоровья: {dataUnitDetail.hit_points}</li>
               </ul>
            </ul>   
         : (!fetchStatus) ?
         <ul id='Skils'>
            <button id='CloseDetail' onClick={handleLocation}>X</button>
            <li>У цивилизации нет уникального юнита</li>
         </ul>
         : null }
      </>
   )
}

export default UnitDetailInfo
