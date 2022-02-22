import { GET_COMMENTS_DATA } from './actions';
import {
  ACTION_COMMENTS_DATA_SUCCEED,
  ACTION_COMMENTS_DATA_REQUESTED,
} from '../../ducks/comments';
import { getSomeComments } from '../../services/api/commentsApi';

export const getCommentsDataMiddleware =
  (store) => (dispatch) => async (action) => {
    if (action.type === GET_COMMENTS_DATA) {
      dispatch(ACTION_COMMENTS_DATA_REQUESTED());
      // // fast variant, not recommend:
      // const res = await fetch(action.payload);
      // const data = await res.json();
      // const newData = data.slice(0, 5);

      const data = await getSomeComments();

      dispatch(ACTION_COMMENTS_DATA_SUCCEED(data));
    }
    dispatch(action);
  };
