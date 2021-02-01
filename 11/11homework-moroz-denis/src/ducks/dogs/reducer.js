import {
    GET_DOGS_DATA_REQUEST,
    GET_DOGS_DATA_SUCCEED,
    GET_DOGS_DATA_FAILED,
} from './actions';

export const initialDogssState = {
    data: null,
    isFetching: false,
    error: null
};

export const dogs = (state = initialDogssState, action) => {
    switch (action.type) {
        case GET_DOGS_DATA_REQUEST:
            return {
                ...state, 
                isFetching: true
            };
        case GET_DOGS_DATA_SUCCEED:
            return {
                ...state, 
                isFetching: false,
                data: action.data,
            };    
        case GET_DOGS_DATA_FAILED:
            return {
                ...state, 
                isFetching: false,
                error: action.error,
            };      
        default:
            return {...state};
    };
};