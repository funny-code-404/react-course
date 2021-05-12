import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_UNIT_Requested } from '../ducks/units/actions';


const useFetch = (baseUrl, arr, path) => {
   const dispatches = useDispatch();
   if ( Boolean(arr) == false) {
      dispatches(ACTION_GET_UNIT_Requested(`${baseUrl}/${path}`));
   } else null
}



const getFetch = ( baseUrl, path, arr) => {
   const dispatches = useDispatch();
   if ( Boolean(arr) == false) {
     dispatches(ACTION_GET_CIVIL_Requested(`${baseUrl}/${path}`));
   } else null
 }

 export default getFetch