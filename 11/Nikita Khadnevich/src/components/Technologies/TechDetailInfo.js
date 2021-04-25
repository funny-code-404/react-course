import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_TECH_DETAIL_Succeed, ACTION_GET_TECH_DETAIL_FAILED, ACTION_GET_TECH_FAILED } from '../../ducks/technologies/actions'
import { TechData, TechDataDetail, TechError, TechisFetching } from '../../ducks/technologies/selectors'
import { TechDetailStupid } from './TechStupid'
import { indicator, ButtonClose} from '../SmallElems/SmallElems'


const TechDetailInfo = (props) => {
   const dataDetail= useSelector(TechDataDetail)
   const fetchStatus = useSelector(TechisFetching);
   const  dispatches = useDispatch()
   const { techDetailInfo } = indicator
   
   const handleLocation = () => {
      history.go(-1)
      dispatches(ACTION_GET_TECH_DETAIL_Succeed({}))
      dispatches(ACTION_GET_TECH_DETAIL_FAILED(null))
   }

   return (
      <>
         {(dataDetail[0] && !fetchStatus) ? 
            <>
               <div className='skilsWrap'>
               <ButtonClose handleLocation={handleLocation} idName={'SkilsBut'} indicator={techDetailInfo} 
               selector={TechError}/>
                  {dataDetail.map((item,i) => {
                     return (          
                        <ul key={'Skils'+techDetailInfo+i} id={`Skils${i}`}>
                           <TechDetailStupid item={item} handleLocation={handleLocation} />
                        </ul>
                     )
                  })}
               </div>
            </> 
            : (dataDetail.id && !fetchStatus) ?
               <TechDetailStupid dataDetail={dataDetail} handleLocation={handleLocation} />
            : (!fetchStatus) ?
               <ButtonClose handleLocation={handleLocation} idName={'Skils'} indicator={techDetailInfo} selector={TechError}/>       
         : null }
      </>
   )
}
   
export default TechDetailInfo
