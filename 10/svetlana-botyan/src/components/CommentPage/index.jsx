import { useParams, useLocation } from 'react-router-dom';

import './style.scss';

export const CommentPage = () => {
  let { state } = useLocation();
  const { id } = useParams();

  let { name, email, body } = state;

  return (
    <div className="comment">
      <h2>Comments {name}</h2>
      <p>{body}</p>
      <div>
        <h4>Info:</h4>
        <p>Comment №{id}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
