import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_POST_REQUESTED } from "../../ducks/posts";

import Error from "../Error";

const PostsItem = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.posts.item);
  const error = useSelector((state) => state.posts.error);
  const { id } = useParams();

  useEffect(() => {
    dispatch(ACTION_GET_POST_REQUESTED(id));
  }, []);

  return (
    <>
    {error && <Error text={error} />}
    {Boolean(item) && (<div className="item">
      <h2>UserId: {item.userId}</h2>
      <h2>Title: {item.title}</h2>
      <p>{item.body}</p>
    </div>)}
    </>
  );
};

export default PostsItem;
