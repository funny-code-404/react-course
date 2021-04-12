import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ACTION_GET_STRU_Requested } from '../../ducks/structures/actions';
import { StructuresData } from '../../ducks/structures/selectors'
import  { baseUrl, Urlpath } from '../Api/Api'

const Structures = (props) => {
  const { structures } = Urlpath
  const data = useSelector(StructuresData);
  const dispatches = useDispatch();
  
  const getFetch = ( url, path, arr) => {
    if ( Boolean(arr) == false) {
      dispatches(ACTION_GET_STRU_Requested(`${url}/${path}`));
    } else null
  }

  useEffect(() => {
    getFetch(baseUrl, structures, data)
  }, []);

  return (
    <>
      <div className='StruWrapper'>
        {data && data.map((item, i) => {
          return (
            <div id={data.id} key={Math.random()} className='StruItem'>
              <Link to={`${props.match.url}/${item.name}`}>{item.name}</Link>
            </div>    
            )
        })
      }
      </div>
    </>
  )
};

export default  Structures