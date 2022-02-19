import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  commentsDataThunkSelector,
  getCommentsData,
} from '../../ducks/comments';

import { url } from '../CONST';

function CommentListThunk() {
  const dispatch = useDispatch();
  const data = useSelector(commentsDataThunkSelector);

  useEffect(() => {
    dispatch(getCommentsData(url));
  }, [dispatch]);

  return (
    <ul>
      <h3>Comments from thunk middleware:</h3>
      {data.map((item) => (
        <li key={item.id}>
          <h5>title: {item.name}</h5>
          <p>email: {item.email}</p>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default CommentListThunk;
