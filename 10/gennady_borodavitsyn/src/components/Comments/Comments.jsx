import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkText = styled.p`
  width: 20%;
  margin: 1rem auto;
  padding: 5px;
  border: solid 2px black;
  border-radius: 20px;
`;

function Comments() {
  return (
    <>
      <Link to={`/CommentListThunk`}>
        <LinkText>to thunk comments</LinkText>
      </Link>
      <Link to={`/CommentList`}>
        <LinkText>to custom comments</LinkText>
      </Link>
    </>
  );
}

export default Comments;
