// Actions
export const GET_ITEM_DETAILS_REQUESTED = 'GET_ITEM_DETAILS_REQUESTED';
export const GET_ITEM_DETAILS_SUCCEEDED = 'GET_ITEM_DETAILS_SUCCEEDED';
export const GET_ITEM_DETAILS_FAILED = 'GET_ITEM_DETAILS_FAILED';

// Initial state
export const initialItemDetailState = {
    data: [],
    isFetching: false,
    error: null,
};

// Reducer
export const itemReducer = (state = initialItemDetailState, action) => {
    switch (action.type) {
        case GET_ITEM_DETAILS_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: initialItemDetailState.error,
            };
        case GET_ITEM_DETAILS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case GET_ITEM_DETAILS_SUCCEEDED:
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
