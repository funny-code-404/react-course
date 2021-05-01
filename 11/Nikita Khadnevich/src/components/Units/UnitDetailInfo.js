import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory }  from 'react-router-dom'
import { ACTION_GET_UNITS_DETAIL_Succeed, ACTION_GET_UNITS_DETAIL_FAILED } from '../../ducks/units/actions'
import { UnitsdataUnitDetail,  UnitsisFetching, Unitserror} from '../../ducks/units/selectors'
import { UnitDetailStupid } from '../Units/UnitsStupid'
import { indicator, ButtonClose } from '../SmallElems/SmallElems'


const UnitDetailInfo = (props) => {
   const history = useHistory()
   const dataUnitDetail = useSelector(UnitsdataUnitDetail)
   const fetchStatus = useSelector(UnitsisFetching);
   const  dispatches = useDispatch()
   const { unitDetailInfo } = indicator
   
   const handleLocation = () => {
      history.go(-1)
      dispatches(ACTION_GET_UNITS_DETAIL_Succeed([]))
      dispatches(ACTION_GET_UNITS_DETAIL_FAILED(null))
   }

   return (
      <>
         {(dataUnitDetail[0] && !fetchStatus)  ? 
         <>  
            <div key={'skilsWrap'+unitDetailInfo} className='skilsWrap'>
               <ButtonClose handleLocation={handleLocation} idName={'Skils'} indicator={unitDetailInfo} selector={Unitserror} />
                  {dataUnitDetail.map((item, i) => {
                     return (
                           <ul key={'Skils'+unitDetailInfo+i} id={`Skils${i}`}>
                              <UnitDetailStupid item={item} handleLocation={handleLocation} />   
                           </ul> 
                        )
                     })
                  }
            </div>
         </>
         : (dataUnitDetail.id && !fetchStatus) ?
               <UnitDetailStupid dataUnitDetail={dataUnitDetail} handleLocation={handleLocation} />
         : (!fetchStatus) ?
               <ButtonClose handleLocation={handleLocation} idName={'Skils'} indicator={unitDetailInfo} selector={Unitserror} />
         : null}
      </>
   )
}

export default UnitDetailInfo
