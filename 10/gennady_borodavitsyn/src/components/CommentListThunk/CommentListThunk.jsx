import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  commentsDataThunkSelector,
  getCommentsData,
} from '../../ducks/comments';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';

import { url } from '../CONST';

const Title = styled.h3`
  background-color: aqua;
`;
const Ul = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  list-style-type: none;
  background-color: aqua;

  li {
    border: solid black 1px;
  }
`;

function CommentListThunk() {
  const dispatch = useDispatch();
  const data = useSelector(commentsDataThunkSelector);

  useEffect(() => {
    dispatch(getCommentsData(url));
  }, [dispatch]);

  let history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <div>
      <button onClick={handleClick}>go home</button>
      <Ul>
        <Title>Comments from thunk middleware:</Title>
        {data.map((item) => (
          <Link to={`/CommentListThunk/info/${item.id}`} key={item.id}>
            <li>
              <h5>title: {item.name}</h5>
              <p>email: {item.email}</p>
            </li>
          </Link>
        ))}
      </Ul>
    </div>
  );
}

export default CommentListThunk;
