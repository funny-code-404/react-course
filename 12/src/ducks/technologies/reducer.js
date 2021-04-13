import { 
	GET_DATA_TECHNOLOGIES_REQUSTED,
	GET_DATA_TECHNOLOGIES_SUCCEDED,
	GET_DATA_TECHNOLOGIES_FAILED
 } from "./actions";

export const initialTechnologies = {
	data: null,
	isFetching: false,
	error: null,
}

export const technologies = (state = initialTechnologies, action ) => {
	switch (action.type) {
		case GET_DATA_TECHNOLOGIES_REQUSTED:
			return {
				...state,
				isFetching: true,
				error: null,
			}
		case GET_DATA_TECHNOLOGIES_SUCCEDED:
			return {
				...state,
				data: action.data,
				isFetching: false,
				error: null,
			}
		case GET_DATA_TECHNOLOGIES_FAILED:
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