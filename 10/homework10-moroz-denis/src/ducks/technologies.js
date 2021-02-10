import { API } from '../api';

// ACTIONS
export const GET_TECHNOLOGIES_DATA_REQUESTED = 'GET_TECHNOLOGIES_DATA_REQUESTED';
export const GET_TECHNOLOGIES_DATA_SUCCEED = 'GET_TECHNOLOGIES_DATA_SUCCEED';
export const GET_TECHNOLOGIES_DATA_FAILED = 'GET_TECHNOLOGIES_DATA_FAILED';

// ACTION CREATORS/MIDDLEWARES

export const getTechnologiesData = (path) => async (dispatch) => {
    dispatch({
        type: GET_TECHNOLOGIES_DATA_REQUESTED
    });

    try {
        const res = await API.get(path);
        const data = await res.json();

        dispatch({
            type: GET_TECHNOLOGIES_DATA_SUCCEED,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_TECHNOLOGIES_DATA_FAILED,
            payload: error.toString()
        });
    }
}

// INITIAL STATE
export const initialTechnologiesState = {
    data: [],
    isFetching: false,
    error: null,
}

// REDUCER
export const technologiesReducer = (state = initialTechnologiesState, action) => {
    switch(action.type) {
        case GET_TECHNOLOGIES_DATA_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialTechnologiesState.error,
            }
        case GET_TECHNOLOGIES_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case GET_TECHNOLOGIES_DATA_SUCCEED:
            return {
            ...state,
            data: action.payload,
            isFetching: false,
        }
        default:
            return {
                ...state,
            }
    }
}