import {
    GET_DATA_CREATEDIN_REQUSTED,
    GET_DATA_CREATEDIN_SUCCEDED,
    GET_DATA_CREATEDIN_FAILED,
 } from "./actions";

 export const initialCreatedIn = {
     data: null,
     isFetching: false,
     error: null,
 }

 export const createdIn = (state = initialCreatedIn, action) => {
     switch (action.type) {
         case GET_DATA_CREATEDIN_REQUSTED: 
            return { 
                ...state, 
                isFetching: true, 
                error: null 
            }
         case GET_DATA_CREATEDIN_SUCCEDED: 
            return { 
                ...state, 
                data: action.data, 
                isFetching: false,
                error: null 
            }
         case GET_DATA_CREATEDIN_FAILED: 
            return { 
                ...state, 
                isFetching: false,
                error: action.error 
            }
         default: return { ...state }
     }
 }