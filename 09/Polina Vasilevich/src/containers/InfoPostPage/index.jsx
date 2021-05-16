import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../../components/Spinner";
import { API_POSTS } from "../../constants/api";

const InfoPostPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_POSTS}/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data ? (
        <div>
          <h2>User id: {data.userId}</h2>
          <h3>Title: {data.title}</h3>
          <p>Post: {data.body}</p>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

InfoPostPage.propTypes = {
  text: PropTypes.string,
};

export default InfoPostPage;
