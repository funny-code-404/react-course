import { 
	GET_DATA_CIVILIZATIONS_REQUESTED,
	GET_DATA_CIVILIZATIONS_SUCCEDED,
	GET_DATA_CIVILIZATIONS_FAILED,
 } from "./actions";

 export const initialStateCivilizations = {
	data: null,
	isFetching: false,
	error: null,
 }

 export const civilizations = ( state = initialStateCivilizations, action ) => {
	 switch (action.type) {
		 case GET_DATA_CIVILIZATIONS_REQUESTED:
			return {
				...state,
				isFetching: true,
				error: null,
			}
		 case GET_DATA_CIVILIZATIONS_SUCCEDED:
			return {
				...state,
				data: action.data,
				isFetching: false,
				error: null,
			}
		 case GET_DATA_CIVILIZATIONS_FAILED:
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