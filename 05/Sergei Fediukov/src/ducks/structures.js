import { API } from '../api';

// Actions
export const GET_STRUCTURES_DATA_REQUESTED = 'GET_STRUCTURES_DATA_REQUESTED';
export const GET_STRUCTURES_DATA_SUCCEEDED = 'GET_STRUCTURES_DATA_SUCCEEDED';
export const GET_STRUCTURES_DATA_FAILED = 'GET_STRUCTURES_DATA_FAILED';


// Action creators/Middlewares

export const getStructuresData = (path) => async (dispatch, getState) => {
    if (!Boolean(getState().structures.data.length)) {
        dispatch({
            type: GET_STRUCTURES_DATA_REQUESTED
        });

        try {
            const res = await API.get(path);
            const json = await res.json()
            const { structures: data } = json
            dispatch({
                type: GET_STRUCTURES_DATA_SUCCEEDED,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_STRUCTURES_DATA_FAILED,
                payload: e.toString()
            });
        }
    }
}

// Initial state
export const initialStructuresState = {
    data: [],
    isFetching: false,
    error: null,
}

// Reducer
export const structuresReducer = (state = initialStructuresState, action) => {
    switch (action.type) {
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
        case GET_STRUCTURES_DATA_SUCCEEDED:
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
