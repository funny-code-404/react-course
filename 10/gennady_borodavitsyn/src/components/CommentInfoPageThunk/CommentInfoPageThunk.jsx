import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  commentsDataThunkSelector,
  commentsDataDetailsThunkSelector,
  getCommentDetails,
} from '../../ducks/comments';
import styled from 'styled-components';

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

function CommentInfoPageThunk() {
  const dispatch = useDispatch();

  const { id } = useParams();
  // console.log(`comment id: ${id}`);

  const data = useSelector(commentsDataThunkSelector);

  function isEmpty(data) {
    return data.length === 0;
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
          <Title>Info comment from thunk middleware:</Title>
          <li>
            <h5>title: {dataDetails.name}</h5>
            <p>{dataDetails.body}</p>
            <button onClick={handleClick}>back</button>
          </li>
        </Ul>
      ) : (
        <Ul>
          <Title>Info comment from thunk middleware:</Title>
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
