export const GET_DATA_UNIQUEUNIT_REQUSTED = 'GET_DATA_UNIQUEUNIT_REQUSTED';
export const GET_DATA_UNIQUEUNIT_SUCCEDED = 'GET_DATA_UNIQUEUNIT_SUCCEDED';
export const GET_DATA_UNIQUEUNIT_FAILED = 'GET_DATA_UNIQUEUNIT_FAILED';

export const getDataUniqueUnitRequsted = (path) =>({
	type: GET_DATA_UNIQUEUNIT_REQUSTED,
	path,
})
export const getDataUniqueUnitSucceded = ({ data }) => ({
	type: GET_DATA_UNIQUEUNIT_SUCCEDED,
	data,
})
export const getDataUniqueUnitFailed = (error) => ({
	type: GET_DATA_UNIQUEUNIT_FAILED,
	error,
})