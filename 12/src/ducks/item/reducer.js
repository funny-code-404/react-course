import { 
	GET_DATA_ITEM_REQUESTED,
	GET_DATA_ITEM_SUCCEDED,
	GET_DATA_ITEM_FAILED,
 } from "./actions";

 export const initialStateItem = {
	data: null,
	isFetching: false,
	error: null,
 }

 export const item = ( state = initialStateItem, action ) => {
	 switch (action.type) {
		 case GET_DATA_ITEM_REQUESTED:
			return {
				...state,
				isFetching: true,
				error: null,
			}
		 case GET_DATA_ITEM_SUCCEDED:
			return {
				...state,
				data: action.data,
				isFetching: false,
				error: null,
			}
		 case GET_DATA_ITEM_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		 default:
			return {
				...state,
			}
	 }
 }