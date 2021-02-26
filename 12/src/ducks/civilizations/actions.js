export const GET_DATA_CIVILIZATIONS_REQUESTED = 'GET_DATA_CIVILIZATIONS_REQUESTED';
export const GET_DATA_CIVILIZATIONS_SUCCEDED = 'GET_DATA_CIVILIZATIONS_SUCCEDED';
export const GET_DATA_CIVILIZATIONS_FAILED = 'GET_DATA_CIVILIZATIONS_FAILED';

export  const getDataCivilizationsRequested = (path) => ({
	type: GET_DATA_CIVILIZATIONS_REQUESTED,
	path
});
export  const getDataCivilizationsSucceded = ({data}) => ({
	type: GET_DATA_CIVILIZATIONS_SUCCEDED,
	data
});
export  const getDataCivilizationsFailed = (error) => ({
	type: GET_DATA_CIVILIZATIONS_FAILED,
	error
});