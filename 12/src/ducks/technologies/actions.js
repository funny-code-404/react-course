export const GET_DATA_TECHNOLOGIES_REQUSTED = 'GET_DATA_TECHNOLOGIES_REQUSTED';
export const GET_DATA_TECHNOLOGIES_SUCCEDED = 'GET_DATA_TECHNOLOGIES_SUCCEDED';
export const GET_DATA_TECHNOLOGIES_FAILED = 'GET_DATA_TECHNOLOGIES_FAILED';

export const getDataTechnologiesRequsted = (path) =>({
	type: GET_DATA_TECHNOLOGIES_REQUSTED,
	path,
})
export const getDataTechnologiesSucceded = ({ data }) => ({
	type: GET_DATA_TECHNOLOGIES_SUCCEDED,
	data,
})
export const getDataTechnologiesFailed = (error) => ({
	type: GET_DATA_TECHNOLOGIES_FAILED,
	error,
})