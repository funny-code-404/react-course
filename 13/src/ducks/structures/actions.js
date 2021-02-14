export const GET_DATA_STRUCTURES_REQUSTED = 'GET_DATA_STRUCTURES_REQUSTED';
export const GET_DATA_STRUCTURES_SUCCEDED = 'GET_DATA_STRUCTURES_SUCCEDED';
export const GET_DATA_STRUCTURES_FAILD = 'GET_DATA_STRUCTURES_FAILD';

export const getDataStructuresRequsted = (path) => ({
    type: GET_DATA_STRUCTURES_REQUSTED,
    path
})
export const getDataStructuresSucceded = ({ data }) => ({
    type: GET_DATA_STRUCTURES_SUCCEDED,
    data
})
export const getDataStructuresFailed = (error) => ({
    type: GET_DATA_STRUCTURES_FAILD,
    error
})