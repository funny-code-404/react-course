import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  commentsDataThunkSelector,
  getCommentsData,
} from '../../ducks/comments';
import styled from 'styled-components';

import { url } from '../CONST';

const H3 = styled.h3`
  background-color: aqua;
`;
const Ul = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  list-style-type: none;
  background-color: aqua;
`;
const Li = styled.li`
  border: solid black 1px;
`;

function CommentListThunk() {
  const dispatch = useDispatch();
  const data = useSelector(commentsDataThunkSelector);

  useEffect(() => {
    dispatch(getCommentsData(url));
  }, [dispatch]);

  return (
    <Ul>
      <H3>Comments from thunk middleware:</H3>
      {data.map((item) => (
        <Li key={item.id}>
          <h5>title: {item.name}</h5>
          <p>email: {item.email}</p>
          <p>{item.body}</p>
        </Li>
      ))}
    </Ul>
  );
}

export default CommentListThunk;
