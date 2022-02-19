// ACTION TYPES
const COMMENTS_DATA_REQUESTED = 'COMMENTS_DATA_REQUESTED';
const COMMENTS_DATA_SUCCEED = 'COMMENTS_DATA_SUCCEED';
const COMMENTS_DATA_FAILED = 'COMMENTS_DATA_FAILED';

// ACTION CREATORS
export const ACTION_COMMENTS_DATA_REQUESTED = () => ({
  type: COMMENTS_DATA_REQUESTED,
});

export const ACTION_COMMENTS_DATA_SUCCEED = (payload) => ({
  type: COMMENTS_DATA_SUCCEED,
  payload,
});

export const ACTION_COMMENTS_DATA_FAILED = (error) => ({
  type: COMMENTS_DATA_FAILED,
  error,
});

// INITIAL STATE
export const initialState = {
  data: [],
  error: null,
  isFetching: false,
};

// SELECTORS
export const commentsDataSelector = (state) => state.data;

// REDUCER
export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case COMMENTS_DATA_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case COMMENTS_DATA_FAILED:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return {
        ...state,
      };
  }
};
