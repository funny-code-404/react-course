import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../asyncActions/posts';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
        <h1>Posts</h1>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} style={{ marginBottom: '15px' }}>
            body: {post.body}
          </div>
        ))
      ) : (
        <div>Данные отсутствуют </div>
      )}
    </div>
  );
}

export default Posts;
