import {
  getSomeCommentsThunk,
  getCommentThunk,
} from '../services/api/commentsApi';

// ACTION TYPES
const COMMENTS_DATA_REQUESTED = 'COMMENTS_DATA_REQUESTED';
const COMMENTS_DATA_SUCCEED = 'COMMENTS_DATA_SUCCEED';
const COMMENTS_DATA_FAILED = 'COMMENTS_DATA_FAILED';

const COMMENTS_DATA_THUNK_REQUESTED = 'COMMENTS_DATA_THUNK_REQUESTED';
const COMMENTS_DATA_THUNK_SUCCEED = 'COMMENTS_DATA_THUNK_SUCCEED';
const COMMENTS_DATA_THUNK_FAILED = 'COMMENTS_DATA_THUNK_FAILED';

const COMMENT_DETAILS_THUNK_REQUESTED = 'COMMENT_DETAILS_THUNK_REQUESTED';
const COMMENT_DETAILS_THUNK_SUCCEED = 'COMMENT_DETAILS_THUNK_SUCCEED';
const COMMENT_DETAILS_THUNK_FAILED = 'COMMENT_DETAILS_THUNK_FAILED';

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

export const ACTION_COMMENTS_DATA_THUNK_REQUESTED = () => ({
  type: COMMENTS_DATA_THUNK_REQUESTED,
});

export const ACTION_COMMENTS_DATA_THUNK_SUCCEED = (payload) => ({
  type: COMMENTS_DATA_THUNK_SUCCEED,
  payload,
});

export const ACTION_COMMENTS_DATA_THUNK_FAILED = (error) => ({
  type: COMMENTS_DATA_THUNK_FAILED,
  error,
});

export const ACTION_COMMENT_DETAILS_THUNK_REQUESTED = () => ({
  type: COMMENT_DETAILS_THUNK_REQUESTED,
});

export const ACTION_COMMENT_DETAILS_THUNK_SUCCEED = (payload) => ({
  type: COMMENT_DETAILS_THUNK_SUCCEED,
  payload,
});

export const ACTION_COMMENT_DETAILS_THUNK_FAILED = (error) => ({
  type: COMMENT_DETAILS_THUNK_FAILED,
  error,
});

// MIDDLEWARES
export const getCommentsData = () => async (dispatch) => {
  try {
    dispatch(ACTION_COMMENTS_DATA_THUNK_REQUESTED());

    const data = await getSomeCommentsThunk();

    dispatch(ACTION_COMMENTS_DATA_THUNK_SUCCEED(data));
  } catch (error) {
    dispatch(ACTION_COMMENTS_DATA_THUNK_FAILED(error));
  }
};

export const getCommentDetails = (id) => async (dispatch) => {
  try {
    dispatch(ACTION_COMMENT_DETAILS_THUNK_REQUESTED());

    const data = await getCommentThunk(id);

    dispatch(ACTION_COMMENT_DETAILS_THUNK_SUCCEED(data));
  } catch (error) {
    dispatch(ACTION_COMMENT_DETAILS_THUNK_FAILED(error));
  }
};

// INITIAL STATE
export const initialState = {
  data: [],
  dataThunk: [],
  dataDetailsThunk: [],
  error: null,
  isFetching: false,
};

// SELECTORS
export const commentsDataSelector = (state) => state.data;
export const commentsDataThunkSelector = (state) => state.dataThunk;
export const commentsDataDetailsThunkSelector = (state) =>
  state.dataDetailsThunk;

// REDUCER
export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_DATA_REQUESTED:
    case COMMENTS_DATA_THUNK_REQUESTED:
    case COMMENT_DETAILS_THUNK_REQUESTED:
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
    case COMMENTS_DATA_THUNK_SUCCEED:
      return {
        ...state,
        dataThunk: action.payload,
        isFetching: false,
      };
    case COMMENT_DETAILS_THUNK_SUCCEED:
      return {
        ...state,
        dataDetailsThunk: action.payload,
        isFetching: false,
      };
    case COMMENTS_DATA_FAILED:
    case COMMENTS_DATA_THUNK_FAILED:
    case COMMENT_DETAILS_THUNK_FAILED:
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
