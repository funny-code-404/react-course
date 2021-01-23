import { API } from '../api';

// Actions
export const GET_TECHNOLOGIES_DATA_REQUESTED = 'GET_TECHNOLOGIES_DATA_REQUESTED';
export const GET_TECHNOLOGIES_DATA_SUCCEEDED = 'GET_TECHNOLOGIES_DATA_SUCCEEDED';
export const GET_TECHNOLOGIES_DATA_FAILED = 'GET_TECHNOLOGIES_DATA_FAILED';


// Action creators/Middlewares

export const getTechnologiesData = (path) => async (dispatch, getState) => {
    if (!Boolean(getState().technologies.data.length)) {
        dispatch({
            type: GET_TECHNOLOGIES_DATA_REQUESTED
        });

        try {
            const res = await API.get(path);
            const json = await res.json()
            const { technologies: data } = json
            dispatch({
                type: GET_TECHNOLOGIES_DATA_SUCCEEDED,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_TECHNOLOGIES_DATA_FAILED,
                payload: e.toString()
            });
        }
    }
}

// Initial state
export const initialTechnologiesState = {
    data: [],
    isFetching: false,
    error: null,
}

// Reducer
export const technologiesReducer = (state = initialTechnologiesState, action) => {
    switch (action.type) {
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
        case GET_TECHNOLOGIES_DATA_SUCCEEDED:
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
