import { USER_ACTION_SUCCEDED, USER_ACTION_FAILED, GET_SIGN_UP_REQUESTED, GET_LOGIN_REQUESTED, SIGN_OUT_REQUESTED } from "./actions";

export const initialOnAuth = {
	user: null,
	isFetching: false,
	error: null
}

export const auth = (state = initialOnAuth, action) => {
	switch (action.type) {
		case USER_ACTION_SUCCEDED:
			return {
				...state,
				user: action.user,
				isFetching: false,
				error: null,
			}
		case GET_SIGN_UP_REQUESTED:
			return {
				...state,
				isFetching: true,
				error: null,
			}
		case GET_LOGIN_REQUESTED:
			return {
				...state,
				isFetching: true,
				error: null,
			}
		case USER_ACTION_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		case SIGN_OUT_REQUESTED:
			return {
				...state,
				isFetching: true,
				error: null,
			}
		default:
			return {
				...state
			}
	}
}