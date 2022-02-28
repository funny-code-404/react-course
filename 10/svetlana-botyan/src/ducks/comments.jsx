import { store } from '../redux/store';
export const getCommentsData =
  (payload, id = null) =>
  async (dispatch) => {
    try {
      dispatch(ACTION_COMMENTS_DATA_REQUESTED());
      const res = await fetch(payload);
      const data = await res.json();
      const arr = data.splice(0, 85);

      dispatch(ACTION_COMMENTS_DATA_SUCCEED(arr));
      id && dispatch(ACTION_COMMENT_REQUESTED(id));
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
export const ACTION_COMMENTS_DATA_SUCCEED = (payload) => {
  return {
    type: COMMENTS_DATA_SUCCEED,
    payload,
  };
};

const COMMENT_REQUESTED = 'COMMENT_REQUESTED';
export const ACTION_COMMENT_REQUESTED = (id) => {
  const arr = store
    .getState()
    .comments.data.filter((item) => item.id === Number.parseInt(id));

  const payload = arr[0];

  return {
    type: COMMENT_REQUESTED,
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
  comment: null,
};

// SELECTORS
export const commentsDataSelector = (state) => state.comments.data;
export const commentDataSelector = (state) => state.comments.comment;

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
    case COMMENT_REQUESTED:
      return {
        ...state,
        comment: action.payload,
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
