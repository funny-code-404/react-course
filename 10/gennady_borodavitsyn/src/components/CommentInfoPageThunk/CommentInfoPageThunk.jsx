import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  commentsDataThunkSelector,
  commentsDataDetailsThunkSelector,
  getCommentDetails,
} from '../../ducks/comments';
import styled from 'styled-components';

const ListTitle = styled.h3`
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

function CommentInfoPageThunk() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const data = useSelector(commentsDataThunkSelector);

  function isEmpty(data) {
    return !data.length;
  }

  useEffect(() => {
    if (isEmpty(data)) {
      dispatch(getCommentDetails(id));
    }
  }, [data, id, dispatch]);

  const comment = data.find((comment) => +comment.id === +id);

  const dataDetails = useSelector(commentsDataDetailsThunkSelector);

  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <>
      {isEmpty(data) ? (
        <Ul>
          <ListTitle>Info comment from thunk middleware:</ListTitle>
          <li>
            <h5>title: {dataDetails.name}</h5>
            <p>{dataDetails.body}</p>
            <button onClick={handleClick}>back</button>
          </li>
        </Ul>
      ) : (
        <Ul>
          <ListTitle>Info comment from thunk middleware:</ListTitle>
          <li>
            <h5>title: {comment.name}</h5>
            <p>{comment.body}</p>
            <button onClick={handleClick}>back</button>
          </li>
        </Ul>
      )}
    </>
  );
}

export default CommentInfoPageThunk;
