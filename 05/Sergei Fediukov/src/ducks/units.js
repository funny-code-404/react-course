// Actions
export const GET_UNITS_DATA_REQUESTED = 'GET_UNITS_DATA_REQUESTED';
export const GET_UNITS_DATA_SUCCEEDED = 'GET_UNITS_DATA_SUCCEEDED';
export const GET_UNITS_DATA_FAILED = 'GET_UNITS_DATA_FAILED';

// Initial state
export const initialUnitsState = {
    data: [],
    isFetching: false,
    error: null,
};

// Reducer
export const unitsReducer = (state = initialUnitsState, action) => {
    switch (action.type) {
        case GET_UNITS_DATA_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialUnitsState.error,
            };
        case GET_UNITS_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case GET_UNITS_DATA_SUCCEEDED:
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
