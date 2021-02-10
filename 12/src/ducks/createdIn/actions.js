export const GET_DATA_CREATEDIN_REQUSTED = 'GET_DATA_CREATEDIN_REQUSTED';
export const GET_DATA_CREATEDIN_SUCCEDED = 'GET_DATA_CREATEDIN_SUCCEDED';
export const GET_DATA_CREATEDIN_FAILED = 'GET_DATA_CREATEDIN_FAILED';

export const getDataCreatedInRequsted = (path) => ({
    type: GET_DATA_CREATEDIN_REQUSTED,
    path
})
export const getDataCreatedInSucceded = ({data}) => ({
    type: GET_DATA_CREATEDIN_SUCCEDED,
    data
})
export const getDataCreatedInFailed = (error) => ({
    type: GET_DATA_CREATEDIN_FAILED,
    error
})