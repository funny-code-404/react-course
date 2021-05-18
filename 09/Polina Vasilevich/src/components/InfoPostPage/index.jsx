import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ACTION_GET_POST_DETAILS } from "@ducks/postDetails";
import { URL_POSTS } from "@constants/api";
import capitalizeFirstLetter from "@utils/capitalizeFirstLetter";
import { Container } from "./styles";

const InfoPostPage = () => {
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails.postDetails);

  const { id } = useParams();

  useEffect(() => {
    dispatch(ACTION_GET_POST_DETAILS(URL_POSTS, id));
  }, [dispatch, id]);

  return (
    postDetails && (
      <Container>
        <h3>{capitalizeFirstLetter(postDetails.title)}</h3>
        <p>{capitalizeFirstLetter(postDetails.body)}</p>
        <span>User: {postDetails.userId}</span>
      </Container>
    )
  );
};

export default InfoPostPage;
