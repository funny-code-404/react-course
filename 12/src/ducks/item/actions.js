export const GET_DATA_ITEM_REQUESTED = 'GET_DATA_ITEM_REQUESTED';
export const GET_DATA_ITEM_SUCCEDED = 'GET_DATA_ITEM_SUCCEDED';
export const GET_DATA_ITEM_FAILED = 'GET_DATA_ITEM_FAILED';

export  const getDataItemRequested = (path) => ({
	type: GET_DATA_ITEM_REQUESTED,
	path
});
export  const getDataItemSucceded = ({data}) => ({
	type: GET_DATA_ITEM_SUCCEDED,
	data
});
export  const getDataItemFailed = (error) => ({
	type: GET_DATA_ITEM_FAILED,
	error
});