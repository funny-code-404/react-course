import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ACTION_GET_UNIT_Requested, ACTION_GET_UNIT_DETAIL_Requested, ACTION_GET_ROUTE_UNIT_MENU} from '../../ducks/units/actions';
import { Unitsdata } from '../../ducks/units/selectors'
import UnitDetailInfo from '../Units/UnitDetailInfo'
import { UnitsStupid } from './UnitsStupid'
import  { baseUrl, Urlpath } from '../Api/Api'
import { ButtonGoBack, indicator} from '../SmallElems/SmallElems'


const UnitSkill = (props) => {
   const dataUnit  = useSelector(Unitsdata)
   const dispatches = useDispatch()
   const { unitSkil } = indicator
   const { units } = Urlpath
   const params = props.match.params.id
   const urlCiv = props.match.url

   const getFetch = (url, path, arr) => {
      if (!arr) {
         dispatches(ACTION_GET_UNIT_Requested(`${url}/${path}`));
      } else return null
      }
   useEffect(() => {
      getFetch(baseUrl, units, dataUnit)
   }, []);

   const handleclick = (e) => {
      const targetPath = e.target.dataset.path
      const targetId = e.target.id
      dispatches(ACTION_GET_ROUTE_UNIT_MENU(targetId))
      {targetPath ? 
      dispatches(ACTION_GET_UNIT_DETAIL_Requested(targetPath)) : null }
   }

   const handleLocation = () => {
      history.go(-1)
   }

   return (
   <>
      { dataUnit && dataUnit.map((item,i) => {
         if ((params) === (item.name+item.id)) {
            return (
               <>
               <ButtonGoBack key={'button'+unitSkil} handleLocation={handleLocation} idName={'goback'+unitSkil} indicatorKey={unitSkil}/>
               <div key={'Items'+unitSkil} className={'items'+unitSkil} >
                  <UnitsStupid key={'stupid'+unitSkil+i}>
                     {item}{urlCiv}{handleclick}{units}
                  </UnitsStupid>
               </div>   
                  <Switch>
                     <Route path={`${urlCiv}/:id`} component={UnitDetailInfo} />
                  </Switch>
               </>
               )
            }
         })
      }
   </>
   )
}

export default UnitSkill