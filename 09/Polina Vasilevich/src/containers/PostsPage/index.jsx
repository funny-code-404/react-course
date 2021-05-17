import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "../../components/List";
import { ACTION_GET_DATA } from "../../ducks/actions/getData";
import { URL_POSTS } from "../../constants/api";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(ACTION_GET_DATA(URL_POSTS));
  }, [dispatch]);

  return <List data={posts} path="/posts/" />;
};

export default PostsPage;
