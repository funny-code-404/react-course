export const GET_DATA = 'GET_DATA';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_CREATEDIN = 'GET_CREATEDIN';
export const GET_UNIQUETECH = 'GET_UNIQUETECH';
export const GET_UNIQUEUNIT = 'GET_UNIQUEUNIT';

export const getData = (path) => ({
	type: GET_DATA,
	path
})
export const getDetail = (path) => ({
	type: GET_DETAIL,
	path
})
export const getCreatedIn = (path) => ({
	type: GET_CREATEDIN,
	path
})
export const getUniqueTech = (path) => ({
	type: GET_UNIQUETECH,
	path
})
export const getUniqueUnit = (path) => ({
	type: GET_UNIQUEUNIT,
	path
})