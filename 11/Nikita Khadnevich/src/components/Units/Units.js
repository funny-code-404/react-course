import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ACTION_GET_UNIT_Requested } from '../../ducks/units/actions';
import { Unitsdata } from '../../ducks/units/selectors'
import  { baseUrl, Urlpath } from '../Api/Api'
import { ListAge, indicator, Sort } from '../SmallElems/SmallElems'

const Units = (props) => {
  const { units } = Urlpath
  const dataUnit = useSelector(Unitsdata);
  const dispatches = useDispatch();
  const propsUrl = props.match.url
 
  const getFetch = ( url, path, arr) => {
    if (!arr) {
      dispatches(ACTION_GET_UNIT_Requested(`${url}/${path}`));
    } else return null
  }

  useEffect(() => {
    getFetch(baseUrl, units, dataUnit)
  }, []);

  return (
    <>  
      <ListAge data={dataUnit} blockName={indicator.units} elem={units} propsUrl={propsUrl} Sort={Sort}/>
    </>
  )
};

export default Units