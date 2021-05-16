import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ACTION_GET_POSTS } from "../../ducks/posts";
import { API_POSTS } from "../../constants/api";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(ACTION_GET_POSTS(API_POSTS));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>
              <Link
                to={{
                  pathname: `/posts/${post.id}`,
                  state: post,
                }}
              >
                {post.body}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
