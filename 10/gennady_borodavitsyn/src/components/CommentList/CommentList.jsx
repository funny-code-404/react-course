import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_COMMENTS_DATA } from '../../redux/middlewares/actions';
import { commentsDataSelector } from '../../ducks/comments';
import styled from 'styled-components';

import { url } from '../CONST';

const H3 = styled.h3`
  background-color: green;
`;
const Ul = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  list-style-type: none;
  background-color: green;
`;
const Li = styled.li`
  border: solid black 1px;
`;

function CommentList() {
  const dispatch = useDispatch();
  const data = useSelector(commentsDataSelector);

  useEffect(() => {
    dispatch(ACTION_GET_COMMENTS_DATA(url));
  }, [dispatch]);

  return (
    <div>
      <Ul>
        <H3>Comments from custom middleware:</H3>
        {data.map((item) => (
          <Li key={item.id}>
            <h5>title: {item.name}</h5>
            <p>email: {item.email}</p>
            <p>{item.body}</p>
          </Li>
        ))}
      </Ul>
    </div>
  );
}

export default CommentList;
