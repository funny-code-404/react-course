import { API } from '../api';

// ACTIONS
export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const GET_DATA_SUCCEEDED = 'GET_DATA_SUCCEEDED';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

// ACTION CREATORS/MIDDLEWARES
export const getData = () => async (dispatch) => {
    dispatch({
        type: GET_DATA_REQUESTED
    });

    try {
        const res = await API.get();
        const data = await res.json();

        dispatch({
            type: GET_DATA_SUCCEEDED,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_DATA_FAILED,
            payload: error.toString()
        });
    }
}

// INITIAL STATE
export const initialState = {
    data: [],
    isFetching: false,
    error: null,
}

// REDUCER
export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialState.error,
            }
        case GET_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case GET_DATA_SUCCEEDED:
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
