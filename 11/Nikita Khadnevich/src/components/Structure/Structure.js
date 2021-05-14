import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_STRU_Requested } from '../../ducks/structures/actions';
import { StructuresData } from '../../ducks/structures/selectors'
import  { baseUrl, Urlpath } from '../Api/Api'
import { ListAge,  indicator, SortStructure } from '../SmallElems/SmallElems'


const Structures = (props) => {
  const { structures } = Urlpath
  const data = useSelector(StructuresData);
  const dispatches = useDispatch();
  const { structure } = indicator;
  const propsUrl = props.match.url
  
  const getFetch = ( url, path, arr) => {
    if (!arr) {
      dispatches(ACTION_GET_STRU_Requested(`${url}/${path}`));
    } else null
  }


  useEffect(() => {
    getFetch(baseUrl, structures, data)
  }, []);

  return (
    <ListAge data={data} blockName={structure} elem={structures} propsUrl={propsUrl} SortStructure={SortStructure}/>
  )
};

export default  Structures