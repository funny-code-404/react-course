import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ACTION_GET_TECH_Requested } from '../../ducks/technologies/actions';
import { TechData } from '../../ducks/technologies/selectors'
import { indicator, ListAge , Sort } from '../SmallElems/SmallElems'
import  { baseUrl, Urlpath } from '../Api/Api'

const Technologies = (props) => {
  const { technologies } = Urlpath
  const data = useSelector(TechData);
  const dispatches = useDispatch();
  const propsUrl = props.match.url
  const { technology } = indicator;

  const getFetch = (url, path, arr) => {
    if (!arr) {
      dispatches(ACTION_GET_TECH_Requested(`${url}/${path}`));
    } else null
  }

  useEffect(() => {
    getFetch(baseUrl, technologies, data)
  }, []);

  return (
    <>  
      <ListAge data={data} blockName={technology} elem={technologies} propsUrl={propsUrl} Sort={Sort}/>
    </>
  )
};

export default Technologies