export const GET_DATA_UNIQUETECH_REQUSTED = 'GET_DATA_UNIQUETECH_REQUSTED';
export const GET_DATA_UNIQUETECH_SUCCEDED = 'GET_DATA_UNIQUETECH_SUCCEDED';
export const GET_DATA_UNIQUETECH_FAILED = 'GET_DATA_UNIQUETECH_FAILED';

export const getDataUniqueTechRequsted = (path) =>({
	type: GET_DATA_UNIQUETECH_REQUSTED,
	path,
})
export const getDataUniqueTechSucceded = ({ data }) => ({
	type: GET_DATA_UNIQUETECH_SUCCEDED,
	data,
})
export const getDataUniqueTechFailed = (error) => ({
	type: GET_DATA_UNIQUETECH_FAILED,
	error,
})