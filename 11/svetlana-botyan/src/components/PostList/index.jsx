import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_POSTS_DATA_REQUESTED } from '../../ducks/posts/actions';
import { postsDataSelector } from '../../ducks/posts/selectors';

function PostList() {
  const dispatch = useDispatch();
  const postsData = useSelector(postsDataSelector);

  const handleClick = () => dispatch(ACTION_GET_POSTS_DATA_REQUESTED());

  return (
    <div className="App">
      <button onClick={handleClick}>Get list of posts</button>
      <ul>
        {postsData.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
