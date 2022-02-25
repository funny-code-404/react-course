export const getCommentsData = (payload) => async (dispatch) => {
  try {
    dispatch(ACTION_COMMENTS_DATA_REQUESTED());
    const res = await fetch(payload);
    const data = await res.json();

    dispatch(ACTION_COMMENTS_DATA_SUCCEED(data));
  } catch (e) {
    dispatch(ACTION_COMMENTS_DATA_FAILED(e));
  }
};

const COMMENTS_DATA_REQUESTED = 'COMMENTS_DATA_REQUESTED';
export const ACTION_COMMENTS_DATA_REQUESTED = () => {
  return {
    type: COMMENTS_DATA_REQUESTED,
  };
};

const COMMENTS_DATA_SUCCEED = 'COMMENTS_DATA_SUCCEED';
export const ACTION_COMMENTS_DATA_SUCCEED = (arr) => {
  const payload = arr.splice(0, 85);

  return {
    type: COMMENTS_DATA_SUCCEED,
    payload,
  };
};

const COMMENTS_DATA_FAILED = 'COMMENTS_DATA_FAILED ';
export const ACTION_COMMENTS_DATA_FAILED = (error) => {
  return {
    type: COMMENTS_DATA_FAILED,
    error,
  };
};

// STATE
export const initialState = {
  data: [],
  error: null,
  isFetching: false,
};

// SELECTORS
export const commentsDataSelector = (state) => state.comments.data;

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
