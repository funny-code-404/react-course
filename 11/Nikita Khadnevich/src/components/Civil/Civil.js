import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_CIVIL_Requested } from '../../ducks/civil/actions';
import { Civildata } from '../../ducks/civil/selectors'
import  { baseUrl, Urlpath } from '../Api/Api'
import { indicator, ListAge, Sort } from '../SmallElems/SmallElems'


const Civil = (props) => {
  const { civilizations } = Urlpath
  const data = useSelector(Civildata);
  const dispatches = useDispatch();
  const { civil } = indicator;
  const propsUrl = props.match.url

  const getFetch = (url, path, arr) => {
    if (!arr) {
      dispatches(ACTION_GET_CIVIL_Requested(`${url}/${path}`));
    } else return null
  }

  useEffect(() => {
    getFetch(baseUrl, civilizations, data)
  }, []);

  return (
    <>
      <ListAge data={data} blockName={civil} elem={civilizations} propsUrl={propsUrl} Sort={Sort}/>
    </>
  )
};

export default Civil

