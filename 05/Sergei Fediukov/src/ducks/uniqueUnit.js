import { API } from '../api';

// Actions

export const GET_UNIQUE_UNIT_DETAILS_REQUESTED = 'GET_UNIQUE_UNIT_DETAILS_REQUESTED';
export const GET_UNIQUE_UNIT_DETAILS_SUCCEEDED = 'GET_UNIQUE_UNIT_DETAILS_SUCCEEDED';
export const GET_UNIQUE_UNIT_DETAILS_FAILED = 'GET_UNIQUE_UNIT_DETAILS_FAILED';


// Action creators/Middlewares

export const getUniqueUnitDetails = (path) => async (dispatch, getState) => {
    dispatch({
        type: GET_UNIQUE_UNIT_DETAILS_REQUESTED
    });

    try {
        const res = await API.get(path);
        const data = await res.json()
        dispatch({
            type: GET_UNIQUE_UNIT_DETAILS_SUCCEEDED,
            payload: data
        });
    } catch (e) {
        dispatch({
            type: GET_UNIQUE_UNIT_DETAILS_FAILED,
            payload: e.toString()
        });
    }
}
// Initial state
export const initialUniqueUnitState = {
    data: [],
    isFetching: false,
    error: null,
}

// Reducer
export const uniqueUnitReducer = (state = initialUniqueUnitState, action) => {
    switch (action.type) {
        case GET_UNIQUE_UNIT_DETAILS_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialUniqueUnitState.error,
            }
        case GET_UNIQUE_UNIT_DETAILS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case GET_UNIQUE_UNIT_DETAILS_SUCCEEDED:
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
