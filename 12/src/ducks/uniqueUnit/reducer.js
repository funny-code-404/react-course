import { 
	GET_DATA_UNIQUEUNIT_REQUSTED,
	GET_DATA_UNIQUEUNIT_SUCCEDED,
	GET_DATA_UNIQUEUNIT_FAILED
 } from "./actions";

export const initialUniqueUnit = {
	data: null,
	isFetching: false,
	error: null,
}

export const uniqueUnit = (state = initialUniqueUnit, action ) => {
	switch (action.type) {
		case GET_DATA_UNIQUEUNIT_REQUSTED:
			return {
				...state,
				isFetching: true,
				error: null,
			}
		case GET_DATA_UNIQUEUNIT_SUCCEDED:
			return {
				...state,
				data: action.data,
				isFetching: false,
				error: null,
			}
		case GET_DATA_UNIQUEUNIT_FAILED:
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