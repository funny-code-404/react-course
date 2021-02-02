import { API } from '../api';

// Actions
export const GET_UNITS_DATA_REQUESTED = 'GET_UNITS_DATA_REQUESTED';
export const GET_UNITS_DATA_SUCCEEDED = 'GET_UNITS_DATA_SUCCEEDED';
export const GET_UNITS_DATA_FAILED = 'GET_UNITS_DATA_FAILED';


// Action creators/Middlewares

export const getUnitsData = (path) => async (dispatch, getState) => {
    if (!Boolean(getState().units.data.length)) {
        dispatch({
            type: GET_UNITS_DATA_REQUESTED
        });

        try {
            const res = await API.get(path);
            const json = await res.json()
            const { units: data } = json
            dispatch({
                type: GET_UNITS_DATA_SUCCEEDED,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_UNITS_DATA_FAILED,
                payload: e.toString()
            });
        }
    }
}

// Initial state
export const initialUnitsState = {
    data: [],
    isFetching: false,
    error: null,
}

// Reducer
export const unitsReducer = (state = initialUnitsState, action) => {
    switch (action.type) {
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
        case GET_UNITS_DATA_SUCCEEDED:
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
