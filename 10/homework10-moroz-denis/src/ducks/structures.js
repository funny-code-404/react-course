import { API } from '../api';

// ACTIONS
export const GET_STRUCTURES_DATA_REQUESTED = 'GET_STRUCTURES_DATA_REQUESTED';
export const GET_STRUCTURES_DATA_SUCCEED = 'GET_STRUCTURES_DATA_SUCCEED';
export const GET_STRUCTURES_DATA_FAILED = 'GET_STRUCTURES_DATA_FAILED';

// ACTION CREATORS/MIDDLEWARES

export const getStructuresData = (path) => async (dispatch) => {
    dispatch({
        type: GET_STRUCTURES_DATA_REQUESTED
    });

    try {
        const res = await API.get(path);
        const data = await res.json();

        dispatch({
            type: GET_STRUCTURES_DATA_SUCCEED,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_STRUCTURES_DATA_FAILED,
            payload: error.toString()
        });
    }
}

// INITIAL STATE
export const initialStructuresState = {
    data: [],
    isFetching: false,
    error: null,
}

// REDUCER
export const structuresReducer = (state = initialStructuresState, action) => {
    switch(action.type) {
        case GET_STRUCTURES_DATA_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialStructuresState.error,
            }
        case GET_STRUCTURES_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case GET_STRUCTURES_DATA_SUCCEED:
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