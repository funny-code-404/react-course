import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { ACTION_GET_UNIT_Requested, ACTION_GET_UNIT_DETAIL_Requested} from '../../ducks/units/actions';
import { Unitsdata } from '../../ducks/units/selectors'
import UnitDetailInfo from '../Units/UnitDetailInfo'
import  { baseUrl, Urlpath } from '../Api/Api'

const UnitSkill = (props) => {
   const { units } = Urlpath
   const params = props.match.params.id

   const dataUnit  = useSelector(Unitsdata)
   const dispatches = useDispatch()

   const getFetch = ( url, path, arr) => {
      if ( Boolean(arr) == false) {
         dispatches(ACTION_GET_UNIT_Requested(`${url}/${path}`));
      } else null
      }
   useEffect(() => {
      getFetch(baseUrl, units, dataUnit)
   }, []);

   const handleLocation = () => {
      window.history.go(-1)
   }

   const handleclick = (e) => {
      dispatches(ACTION_GET_UNIT_DETAIL_Requested(dataUnit[e.target.id-1].created_in));
   }

   return (
      <>
      <p id='gobackUnit' onClick={handleLocation}>Вернуться назад</p>
         { dataUnit && dataUnit.map((item,i) => {
            if (params === item.name) {
               return (
                  <Router>
                  <div className='UnitsDetail' key={Math.random()+1}>
                     <p>Имя юнита {item.name}</p>
                     <p>Точность: {item.accuracy}</p>
                     <p>Броня: {item.armor}</p>
                     <p>Запас здоровья: {item.hit_points}</p>
                     <p>Дистанция атаки: {item.range}</p>
                     <p>Время постоки: {item.build_time}</p>
                     <p>Тип: {item.age}</p>
                     <p>Отличительная особенность: {item.description}</p>
                     <p>Стоимость Юнита: {`${item.cost?.Wood} древесины`} , {`${item.cost?.Gold} золота`}</p>
                     <div key={Math.random()} className='UnitLinkItem'>
                        <Link to={`${props.match.url}/building`} id={item.id} onClick={handleclick}data-path='unicUnit'>Мануфактура Юнита {item.name}</Link>
                     </div>
                     <Switch>
                        <Route path={`${props.match.url}/building`} component={UnitDetailInfo} />
                     </Switch>
                  </div>
                  </Router>
                  )
               }
            })
         }
      </>
   )
}

export default UnitSkill