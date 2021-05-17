import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Info from "../../components/Info";
import { ACTION_GET_DETAILS } from "../../ducks/actions/getDetails";
import { URL_POSTS } from "../../constants/api";

const InfoPostPage = () => {
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails.postDetails);

  const { id } = useParams();

  useEffect(() => {
    dispatch(ACTION_GET_DETAILS(URL_POSTS, id));
  }, [dispatch, id]);

  return postDetails && <Info {...postDetails} />;
};

export default InfoPostPage;
