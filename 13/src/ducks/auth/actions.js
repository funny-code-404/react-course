export const USER_ACTION_SUCCEDED = 'USER_ACTION_SUCCEDED';
export const USER_ACTION_FAILED = 'USER_ACTION_FAILED';

export const userActionSucceded = ( user ) => ({
	type: USER_ACTION_SUCCEDED,
	user
});
export const userActionFailed = ( error ) => ({
	type: USER_ACTION_FAILED,
	error
});

//----------------------******SIGN_UP******----------------------
export const GET_SIGN_UP_REQUESTED = 'GET_SIGN_UP_REQUESTED';
export const GET_LOGIN_REQUESTED = 'GET_LOGIN_REQUESTED';

export  const getSignUpRequested = (email, password) => ({
	type: GET_SIGN_UP_REQUESTED,
	email,
	password,
});
export  const getLoginRequested = (email, password) => ({
	type: GET_LOGIN_REQUESTED,
	email,
	password,
});

//---------------------******SIGN_OUT******----------------------
export const SIGN_OUT_REQUESTED = 'SIGN_OUT_REQUESTED';

export const signOutRequested = () => ({
	type: SIGN_OUT_REQUESTED,
});
