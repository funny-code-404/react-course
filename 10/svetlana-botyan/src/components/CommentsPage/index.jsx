import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCommentsData, commentsDataSelector } from '../../ducks/comments';
import { v4 as uuidv4 } from 'uuid';
import ListItem from '../ListItem';
import './style.scss';

const url = 'https://jsonplaceholder.typicode.com/comments';

export const CommentsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(commentsDataSelector);

  useEffect(() => {
    dispatch(getCommentsData(url));
  }, [dispatch]);

  return (
    <div>
      <h2>List of comments</h2>
      {data.map((comment) => (
        <ListItem
          key={uuidv4()}
          pathname={comment.id}
          state={comment}
          content={comment.name}
        />
      ))}
    </div>
  );
};
