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

      const data = await getSomeComments();

      dispatch(ACTION_COMMENTS_DATA_SUCCEED(data));
    }
    dispatch(action);
  };
