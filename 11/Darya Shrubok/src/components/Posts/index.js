import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_POSTS_REQUESTED } from "../../ducks/posts";

import Error from "../Error";

const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.data);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(ACTION_GET_POSTS_REQUESTED());
  }, []);

  return (
    <div className="navigation">
      {error && <Error text={error} />}
      {Boolean(data?.length) && (
          data.map((item) => {
            return (
              <Link
                to={`/posts/${item.id}`}
                key={item.id}
              >
                <h2>{item.title}</h2>
              </Link>
            );
          })
      )}
    </div>
  );
};

export default Posts;
