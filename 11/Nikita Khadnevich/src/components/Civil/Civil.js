import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ACTION_GET_CIVIL_Requested } from '../../ducks/civil/actions';
import { Civildata } from '../../ducks/civil/selectors'
import  { baseUrl, Urlpath } from '../Api/Api'


const Civil = (props) => {
  const { civilizations } = Urlpath
  const data = useSelector(Civildata);
  const dispatches = useDispatch();
  
  const getFetch = (url, path, arr) => {
    if ( Boolean(arr) == false) {
      dispatches(ACTION_GET_CIVIL_Requested(`${url}/${path}`));
    } else null
  }

  useEffect(() => {
    getFetch(baseUrl, civilizations, data)
  }, []);

  return (
    <>
      <div className='CivilizationsWrapper'>
        {data && data.map((item, i) => {
          return (
            <div id={data.id} key={Math.random()} className='CivilsItem'>
              <Link to={`${props.match.url}/${item.name}`}>{item.name}</Link>
            </div>   
            )
          })
        }
      </div>
    </>
  )
};

export default Civil

