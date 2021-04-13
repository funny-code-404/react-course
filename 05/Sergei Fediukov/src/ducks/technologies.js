// Actions
export const GET_TECHNOLOGIES_DATA_REQUESTED = 'GET_TECHNOLOGIES_DATA_REQUESTED';
export const GET_TECHNOLOGIES_DATA_SUCCEEDED = 'GET_TECHNOLOGIES_DATA_SUCCEEDED';
export const GET_TECHNOLOGIES_DATA_FAILED = 'GET_TECHNOLOGIES_DATA_FAILED';

// Initial state
export const initialTechnologiesState = {
    data: [],
    isFetching: false,
    error: null,
};

// Reducer
export const technologiesReducer = (state = initialTechnologiesState, action) => {
    switch (action.type) {
        case GET_TECHNOLOGIES_DATA_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialTechnologiesState.error,
            };
        case GET_TECHNOLOGIES_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case GET_TECHNOLOGIES_DATA_SUCCEEDED:
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
