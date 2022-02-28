import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCommentsData,
  ACTION_COMMENT_REQUESTED,
  commentDataSelector,
} from '../../ducks/comments';

import './style.scss';
const url = 'https://jsonplaceholder.typicode.com/comments';

export const CommentPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  dispatch(ACTION_COMMENT_REQUESTED(id));

  const state = useSelector(commentDataSelector);

  useEffect(() => {
    if (!state) {
      dispatch(getCommentsData(url, id));
    }
  }, [dispatch, state, id]);

  return (
    <div className="comment">
      {state ? (
        <>
          <h2>Comments {state.name}</h2>
          <p>{state.body}</p>
          <div>
            <h4>Info:</h4>
            <p>Comment №{id}</p>
            <p>{state.email}</p>
          </div>
        </>
      ) : (
        <> </>
      )}
    </div>
  );
};
