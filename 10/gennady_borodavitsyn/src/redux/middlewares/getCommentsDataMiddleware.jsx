import { GET_COMMENTS_DATA } from './actions';
import { ACTION_COMMENTS_DATA_SUCCEED } from '../../ducks/comments';

export const getCommentsDataMiddleware =
  (store) => (dispatch) => async (action) => {
    if (action.type === GET_COMMENTS_DATA) {
      const res = await fetch(action.payload);
      const data = await res.json();

      const newData = data.slice(0, 5);

      dispatch(ACTION_COMMENTS_DATA_SUCCEED(newData));
    }
    dispatch(action);
  };
