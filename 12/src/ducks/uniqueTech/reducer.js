import { 
	GET_DATA_UNIQUETECH_REQUSTED,
	GET_DATA_UNIQUETECH_SUCCEDED,
	GET_DATA_UNIQUETECH_FAILED
 } from "./actions";

export const initialUniqueTech = {
	data: null,
	isFetching: false,
	error: null,
}

export const uniqueTech = (state = initialUniqueTech, action ) => {
	switch (action.type) {
		case GET_DATA_UNIQUETECH_REQUSTED:
			return {
				...state,
				isFetching: true,
				error: null,
			}
		case GET_DATA_UNIQUETECH_SUCCEDED:
			return {
				...state,
				data: action.data,
				isFetching: false,
				error: null,
			}
		case GET_DATA_UNIQUETECH_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		default:
			return {
				...state
			}
	}
}