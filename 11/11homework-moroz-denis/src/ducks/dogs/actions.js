export const GET_DOGS_DATA_REQUEST = 'GET_DOGS_DATA_REQUEST';
export const GET_DOGS_DATA_SUCCEED = 'GET_DOGS_DATA_SUCCEED';
export const GET_DOGS_DATA_FAILED = 'GET_DOGS_DATA_FAILED';

export const ACTION_GET_DOGS_DATA_REQUEST = (path) => ({
    type: GET_DOGS_DATA_REQUEST,
    path, 
});

export const ACTION_GET_DOGS_DATA_SUCCEED = (data) => ({
    type: GET_DOGS_DATA_SUCCEED,
    data, 
});

export const ACTION_GET_DOGS_DATA_FAILED = (error) => ({
    type: GET_DOGS_DATA_FAILED,
    error, 
});