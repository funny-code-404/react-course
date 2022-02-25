import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_POSTS_DATA_REQUESTED } from '../../ducks/posts/actions';
import { postsSelector } from '../../ducks/posts/selectors';

function PostsList() {
  const dispatch = useDispatch();
  const postsData = useSelector(postsSelector);

  useEffect(() => {
    dispatch(ACTION_GET_POSTS_DATA_REQUESTED());
  }, [dispatch]);

  return (
    <>
      <h2>Posts:</h2>
      <ul>
        {postsData.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.postBody}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostsList;
