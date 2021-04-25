import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ACTION_GET_TECH_Requested, ACTION_GET_TECH_REQUESTED_DETAIL , ACTION_GET_ROUTE_TECH_MENU} from '../../ducks/technologies/actions';
import { TechData, TechDataDetail, TechError, TechisFetching } from '../../ducks/technologies/selectors'
import TechDetailInfo from '../Technologies/TechDetailInfo'
import TechInfoStupid  from './TechStupid'
import  { baseUrl, Urlpath } from '../Api/Api'
import { indicator, ButtonGoBack } from '../SmallElems/SmallElems'


const TechInfo = (props) => {
   const data  = useSelector(TechData)
   const dispatches = useDispatch()
   const { techInfo } = indicator
   const { technologies } = Urlpath
   const params = props.match.params.id
   const urlCiv = props.match.url

   const getFetch = ( url, path, arr) => {
      if (!arr) {
         dispatches(ACTION_GET_TECH_Requested(`${url}/${path}`));
      } else return null
      }

   useEffect(() => {
      getFetch(baseUrl, technologies, data)
   }, []);

   const handleclick = (e) => {
      const targetPath = e.target.dataset.path
      const targetId = e.target.id
      dispatches(ACTION_GET_ROUTE_TECH_MENU(targetId));
      targetPath ?
      dispatches(ACTION_GET_TECH_REQUESTED_DETAIL(targetPath)) : null
   }

   const handleLocation = () => {
      history.go(-1)
   }

   return (
      <>
         { data && data.map((item,i) => {
            if (params === item.name+item.id) {
               return (
                  <>
                     <ButtonGoBack key={'button'+techInfo} handleLocation={handleLocation} idName={'goback'+techInfo} indicator={techInfo}/>
                     <div key={'Items'+techInfo} className={'items'+techInfo}>
                        <TechInfoStupid key={'stupid'+techInfo+i}> 
                           {item}{urlCiv}{handleclick}{technologies}
                        </TechInfoStupid>
                     </div>
                     <Switch>
                        <Route path={`${urlCiv}/:id`} component={TechDetailInfo} />
                     </Switch>
                  </>
                  )
               }
            })
         }
      </>
   )
}

export default TechInfo