export const GET_DOGS_DATA_REQUEST = 'GET_DOGS_DATA_REQUEST';
export const GET_DOGS_DATA_SUCCEED = 'GET_DOGS_DATA_SUCCEED';
export const GET_DOGS_DATA_FAILED = 'GET_DOGS_DATA_FAILED';

export const GET_DOG_PHOTO_REQUEST = 'GET_DOG_PHOTO_REQUEST';
export const GET_DOG_PHOTO_SUCCEED = 'GET_DOG_PHOTO_DATA_SUCCEED';
export const GET_DOG_PHOTO_FAILED = 'GET_DOG_PHOTO_DATA_FAILED';

//GOGS BREEDS LIST

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

//GOGS RANDOM PHOTO

export const ACTION_GET_DOG_PHOTO_REQUEST = (path) => ({
    type: GET_DOG_PHOTO_REQUEST,
    path, 
});

export const ACTION_GET_DOG_PHOTO_SUCCEED = (data) => ({
    type:GET_DOG_PHOTO_SUCCEED,
    data, 
});

export const ACTION_GET_DOG_PHOTO_FAILED = (error) => ({
    type: GET_DOG_PHOTO_FAILED,
    error, 
});