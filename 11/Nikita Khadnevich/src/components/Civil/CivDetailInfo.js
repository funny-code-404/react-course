import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory }  from 'react-router-dom'
import { CivildataDetail, CivilisFetching, Civilpath, Civilerror } from '../../ducks/civil/selectors'
import { ACTION_GET_CIVIL_DETAIL_Succeed, ACTION_GET_CIVIL_DETAIL_FAILED } from '../../ducks/civil/actions'
import { ButtonClose, indicator} from '../SmallElems/SmallElems'
import { CivilUnitDetailStupid, CivilTechDetailStupid } from './CivilStupid'


const CivDetailInfo = (props) => {
   const history = useHistory();
   const $ = useSelector(CivildataDetail);
   const fetchStatus = useSelector(CivilisFetching);
   const path = useSelector(Civilpath)
   const  dispatches = useDispatch()
   const { civDetailinfo } = indicator
   
   const handleLocation = () => {
      history.go(-1);
      dispatches(ACTION_GET_CIVIL_DETAIL_Succeed({}))
      dispatches(ACTION_GET_CIVIL_DETAIL_FAILED(null))

   }
   // Сделать дата мап б проверить есть ли поля с unique_unit и unique_tech

   return (
      <>
         {
            ($.id && !fetchStatus && path == 'unique_unit') ? 
               <CivilUnitDetailStupid>
                  {$}{handleLocation}
               </CivilUnitDetailStupid>
            : ($.id && !fetchStatus && path == 'unique_tech') ?
               <CivilTechDetailStupid>
                  {$}{handleLocation}
               </CivilTechDetailStupid>
            : (!$.id && !fetchStatus) ?
               <ButtonClose handleLocation={handleLocation} idName={'Skils'} indicator={civDetailinfo} selector={Civilerror}/>
            : null
         }
      </>
   )
}

export default CivDetailInfo
