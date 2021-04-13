// Actions
export const GET_UNIQUE_TECH_DETAILS_REQUESTED = 'GET_UNIQUE_TECH_DETAILS_REQUESTED';
export const GET_UNIQUE_TECH_DETAILS_SUCCEEDED = 'GET_UNIQUE_TECH_DETAILS_SUCCEEDED';
export const GET_UNIQUE_TECH_DETAILS_FAILED = 'GET_UNIQUE_TECH_DETAILS_FAILED';

// Initial state
export const initialUniqueTechState = {
    data: [],
    isFetching: false,
    error: null,
};

// Reducer
export const uniqueTechReducer = (state = initialUniqueTechState, action) => {
    switch (action.type) {
        case GET_UNIQUE_TECH_DETAILS_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialUniqueTechState.error,
            };
        case GET_UNIQUE_TECH_DETAILS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case GET_UNIQUE_TECH_DETAILS_SUCCEEDED:
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
