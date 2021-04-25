import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_STRU_Requested } from '../../ducks/structures/actions';
import { StructuresData } from '../../ducks/structures/selectors'
import  { baseUrl, Urlpath } from '../Api/Api'
import { ButtonGoBack, indicator } from '../SmallElems/SmallElems'
import { StructureStupid } from '../Structure/StructureStupid'


const StructureInfo = (props) => {
   const { structures } = Urlpath
   const dataStru = useSelector(StructuresData)
   const  dispatches = useDispatch()
   const { structureInfo } = indicator
   const params = props.match.params.id

   const getFetch = (url, path, arr) => {
      if (!arr) {
         dispatches(ACTION_GET_STRU_Requested(`${url}/${path}`));
      } else return null
   }

   useEffect(() => {
      getFetch(baseUrl, structures, dataStru)
   }, []);

   const handleLocation = () => {
      history.go(-1)
   }

   return ( 
   <>
      <ButtonGoBack key={'button'+structureInfo} handleLocation={handleLocation} idName={'goback'+structureInfo} indicator={structureInfo}/>
      {dataStru && dataStru.map((item, i) => {
         if (params === item.name) {
            return (
               <>
                  <StructureStupid key={'stupid'+structureInfo+i}>
                     {item}
                  </StructureStupid>
               </>
            )
         } 
      })}
   </>
   )
}

export default StructureInfo


