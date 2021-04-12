import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { ACTION_GET_CIVIL_Requested, ACTION_GET_CIVIL_REQUESTED_DETAIL , ACTION_GET_ROUTE_CIVIL_MENU } from '../../ducks/civil/actions';
import { Civildata , CivildataDetail } from '../../ducks/civil/selectors'
import CivDetailInfo from './CivDetailInfo'
import CivilInfoStupid from './CivilStupid'
import  { baseUrl, Urlpath } from '../Api/Api'
import { random } from './CivilStupid'

const CivInfo = (props) => {
   const { civilizations } = Urlpath
   const data = useSelector(Civildata)
   const civilDetail = useSelector(CivildataDetail)
   const  dispatches = useDispatch()

   const getFetch = (url, path, arr) => {
      if ( Boolean(arr) == false) {
        dispatches(ACTION_GET_CIVIL_Requested(`${url}/${path}`));
      } else null
    }
  
    useEffect(() => {
      getFetch(baseUrl, civilizations, data)
    }, []);

   const handleclick = (e) => {
         const targetPath = e.target.dataset.path
         console.log(`e.target.id`, e.target.id)
         dispatches(ACTION_GET_ROUTE_CIVIL_MENU(targetPath));
         targetPath == 'unique_unit'  ?
         dispatches(ACTION_GET_CIVIL_REQUESTED_DETAIL(data[e.target.id-1].unique_unit.join())) :
         targetPath == 'unique_tech' ?
         dispatches(ACTION_GET_CIVIL_REQUESTED_DETAIL(data[e.target.id-1].unique_tech.join()))
         : null
   }

   //1. Пройтись по масиву и забрать уникальное значение
   //2ю задиспатчить его уже в имеющийся новый массив

   // вставлю линку даты и создам новый стор для юниов 
   // путем распаршивания ее через джоин(например)
   // а уже потом у меня будет линковаться все как нужно

   const handleLocation = (props) => {
      window.history.go(-1)
   }
   
   const params = props.match.params.id
   const urlCiv = props.match.url

   return ( 
   <>
      {data && civilDetail && data.map((item, i) => {
         if (params === item.name) {
            return (
               <Router>
                  <a key={'terra'} id='goback' onClick={handleLocation}>Вернуться назад</a>
                  <div className='Items' key={item.id+'terra'}>
                     <CivilInfoStupid > 
                        {item}{urlCiv}{handleclick}
                     </CivilInfoStupid>
                  </div>
                  <Switch>
                     <Route path={`${urlCiv}/:id`} component={CivDetailInfo} />
                  </Switch>
               </Router>
            )
         } 
      })}
   </>
   )
}

export default CivInfo


