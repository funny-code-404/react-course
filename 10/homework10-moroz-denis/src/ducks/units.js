import { API } from '../api';

// ACTIONS
export const GET_UNITS_DATA_REQUESTED = 'GET_UNITS_DATA_REQUESTED';
export const GET_UNITS_DATA_SUCCEED = 'GET_UNITS_DATA_SUCCEED';
export const GET_UNITS_DATA_FAILED = 'GET_UNITS_DATA_FAILED';

// ACTION CREATORS/MIDDLEWARES

export const getUnitsData = (path) => async (dispatch) => {
    dispatch({
        type: GET_UNITS_DATA_REQUESTED
    });

    try {
        const res = await API.get(path);
        const data = await res.json();

        dispatch({
            type: GET_UNITS_DATA_SUCCEED,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_UNITS_DATA_FAILED,
            payload: error.toString()
        });
    }
}

// INITIAL STATE
export const initialUnitsState = {
    data: [],
    isFetching: false,
    error: null,
}

// REDUCER
export const unitsReducer = (state = initialUnitsState, action) => {
    switch(action.type) {
        case GET_UNITS_DATA_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialUnitsState.error,
            }
        case GET_UNITS_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case GET_UNITS_DATA_SUCCEED:
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