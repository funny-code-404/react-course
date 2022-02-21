import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_COMMENTS_DATA } from '../../redux/middlewares/actions';
import { commentsDataSelector } from '../../ducks/comments';
import styled from 'styled-components';

import { url } from '../CONST';

const Title = styled.h3`
  background-color: green;
`;
const Ul = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  list-style-type: none;
  background-color: green;

  li {
    border: solid black 1px;
  }
`;

function CommentListCustom() {
  const dispatch = useDispatch();
  const data = useSelector(commentsDataSelector);

  useEffect(() => {
    dispatch(ACTION_GET_COMMENTS_DATA(url));
  }, [dispatch]);

  let history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <div>
      <button onClick={handleClick}>go home</button>

      <Ul>
        <Title>Comments from custom middleware:</Title>
        {data.map((item) => (
          <li key={item.id}>
            <h5>title: {item.name}</h5>
            <p>email: {item.email}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </Ul>
    </div>
  );
}

export default CommentListCustom;
