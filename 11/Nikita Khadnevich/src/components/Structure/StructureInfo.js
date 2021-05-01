import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ACTION_GET_STRU_Requested } from '../../ducks/structures/actions';
import { StructuresData } from '../../ducks/structures/selectors'
import  { baseUrl, Urlpath } from '../Api/Api'
import { ButtonGoBack, indicator } from '../SmallElems/SmallElems'
import { StructureStupid } from '../Structure/StructureStupid'


const StructureInfo = (props) => {
   const history = useHistory();
   const params = useParams();
   const { structures } = Urlpath
   const dataStru = useSelector(StructuresData)
   const  dispatches = useDispatch()
   const { structureInfo } = indicator

   const getFetch = (url, path, arr) => {
      if (!arr) {
         dispatches(ACTION_GET_STRU_Requested(`${url}/${path}`));
      } else return null
   }

   useEffect(() => {
      getFetch(baseUrl, structures, dataStru)
   }, []);

   const handleLocation = () => {
      history.push('/structures')
   }

   return (
      <div key={'Wrapper'+structureInfo}>
         <ButtonGoBack handleLocation={handleLocation} idName={'goback'+structureInfo} indicator={structureInfo}/>
         {dataStru && dataStru.map((item, i) => {
            if (params.id === item.name) {
               return (
                  <StructureStupid key={'stupid'+structureInfo+i}>
                     {item}
                  </StructureStupid>
               )
            } 
         })}
      </div>
   )
}

export default StructureInfo


