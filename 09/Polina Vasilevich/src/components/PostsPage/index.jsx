import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@components/List";
import { ACTION_GET_POSTS } from "@ducks/posts";
import { URL_POSTS } from "@constants/api";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(ACTION_GET_POSTS(URL_POSTS));
  }, [dispatch]);

  return !!posts.length && <List data={posts} path="/posts/" />;
};

export default PostsPage;
