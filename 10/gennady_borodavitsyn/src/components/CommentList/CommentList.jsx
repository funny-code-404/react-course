import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_COMMENTS_DATA } from '../../redux/middlewares/actions';
import { commentsDataSelector } from '../../ducks/comments';

import { url } from '../CONST';

function CommentList() {
  const dispatch = useDispatch();
  const data = useSelector(commentsDataSelector);

  useEffect(() => {
    dispatch(ACTION_GET_COMMENTS_DATA(url));
  }, [dispatch]);

  return (
    <div>
      <ul>
        <h3>Comments from custom middleware:</h3>
        {data.map((item) => (
          <li key={item.id}>
            <h5>title: {item.name}</h5>
            <p>email: {item.email}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
