// Actions
export const GET_CIVILIZATIONS_DATA_REQUESTED = 'GET_CIVILIZATIONS_DATA_REQUESTED';
export const GET_CIVILIZATIONS_DATA_SUCCEEDED = 'GET_CIVILIZATIONS_DATA_SUCCEEDED';
export const GET_CIVILIZATIONS_DATA_FAILED = 'GET_CIVILIZATIONS_DATA_FAILED';

// Initial state
export const initialCivilizationsState = {
    data: [],
    isFetching: false,
    error: null,
};

// Reducer
export const civilizationsReducer = (state = initialCivilizationsState, action) => {
    switch (action.type) {
        case GET_CIVILIZATIONS_DATA_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialCivilizationsState.error,
            };
        case GET_CIVILIZATIONS_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case GET_CIVILIZATIONS_DATA_SUCCEEDED:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
            };
        default:
            return {
                ...state,
            };
    };
};
