import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { ACTION_GET_TECH_Requested, ACTION_GET_TECH_REQUESTED_DETAIL } from '../../ducks/technologies/actions';
import { TechData, TechDataDetail, TechError, TechisFetching } from '../../ducks/technologies/selectors'
import TechDetailInfo from './TechDetailInfo'
import  { baseUrl, Urlpath } from '../Api/Api'

const TechInfo = (props) => {
   const { technologies } = Urlpath
   const data  = useSelector(TechData)
   const dispatches = useDispatch()
   const params = props.match.params.id

   const getFetch = ( url, path, arr) => {
      if ( Boolean(arr) == false) {
         dispatches(ACTION_GET_TECH_Requested(`${url}/${path}`));
      } else null
      }

   useEffect(() => {
      getFetch(baseUrl, technologies, data)
   }, []);

   const handleLocation = () => {
      window.history.go(-1)
   }
   const handleclick = (e) => {
      dispatches(ACTION_GET_TECH_REQUESTED_DETAIL(data[e.target.id-1].applies_to.join()));
   }

   return (
      <>
      <p id='gobackTech' onClick={handleLocation}>Вернуться назад</p>
         { data && data.map((item,i) => {
            if (params === item.name) {
               return (
                  <Router>
                  <div className='TechDetail' key={Math.random()+1}>
                     <p>Имя юнита {item.name}</p>
                     <p>Время постоки: {item.build_time}</p>
                     <p>Тип: {item.age}</p>
                     <p>Отличительная особенность: {item.description}</p>
                     <p>Распостранение: {item.expansion}</p>
                     <p>Стоимость Юнита: {item.cost.Wood} древесины, {item.cost.Gold} золота</p>
                     <div key={Math.random()} className='TechLinkItem'>
                        <Link to={`${props.match.url}/tech`} id={item.id} onClick={handleclick}  data-path='unicTech'>Мануфакторум производства {item.name}</Link>
                     </div>
                     <Switch>
                        <Route path={`${props.match.url}/tech`} component={TechDetailInfo} />
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

export default TechInfo