import { API } from '../api';

// ACTIONS
export const GET_CIVILIZATIONS_DATA_REQUESTED = 'GET_CIVILIZATIONS_DATA_REQUESTED';
export const GET_CIVILIZATIONS_DATA_SUCCEED = 'GET_CIVILIZATIONS_DATA_SUCCEED';
export const GET_CIVILIZATIONS_DATA_FAILED = 'GET_CIVILIZATIONS_DATA_FAILED';

// ACTION CREATORS/MIDDLEWARES

export const getCivilizationsData = (path) => async (dispatch) => {
    dispatch({
        type: GET_CIVILIZATIONS_DATA_REQUESTED
    });

    try {
        const res = await API.get(path);
        const data = await res.json();

        dispatch({
            type: GET_CIVILIZATIONS_DATA_SUCCEED,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: GET_CIVILIZATIONS_DATA_FAILED,
            payload: error.toString()
        });
    }
}

// INITIAL STATE
export const initialCivilizationsState = {
    data: [],
    isFetching: false,
    error: null,
}

// REDUCER
export const civilizationsReducer = (state = initialCivilizationsState, action) => {
    switch(action.type) {
        case GET_CIVILIZATIONS_DATA_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialCivilizationsState.error,
            }
        case GET_CIVILIZATIONS_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case GET_CIVILIZATIONS_DATA_SUCCEED:
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