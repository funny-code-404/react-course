import { API } from '../api';

// Actions
export const GET_CIVILIZATIONS_DATA_REQUESTED = 'GET_CIVILIZATIONS_DATA_REQUESTED';
export const GET_CIVILIZATIONS_DATA_SUCCEEDED = 'GET_CIVILIZATIONS_DATA_SUCCEEDED';
export const GET_CIVILIZATIONS_DATA_FAILED = 'GET_CIVILIZATIONS_DATA_FAILED';


// Action creators/Middlewares

export const getCivilizationsData = (path) => async (dispatch, getState) => {
    if (!Boolean(getState().civilizations.data.length)) {
        dispatch({
            type: GET_CIVILIZATIONS_DATA_REQUESTED
        });
        try {
            const res = await API.get(path);
            const json = await res.json()
            const { civilizations: data } = json
            dispatch({
                type: GET_CIVILIZATIONS_DATA_SUCCEEDED,
                payload: data
            });
        } catch (e) {
            dispatch({
                type: GET_CIVILIZATIONS_DATA_FAILED,
                payload: e.toString()
            });
        }
    }
}

// Initial state
export const initialCivilizationsState = {
    data: [],
    isFetching: false,
    error: null,
}

// Reducer
export const civilizationsReducer = (state = initialCivilizationsState, action) => {
    switch (action.type) {
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
        case GET_CIVILIZATIONS_DATA_SUCCEEDED:
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
