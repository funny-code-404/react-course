import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { API } from "../api";
import PropTypes from "prop-types";

export const Item = ({ location, match }) => {
  const [item, setItem] = useState(location.state.item);

  useEffect(() => {
    if (!item) {
      API.get(match.url)
        .then((res) => res.json())
        .then((data) => setItem(data));
    }
  }, []);

  const { title, id, userId, body, completed } = item;

  return (
    <>
      {item ? (
        <div>
          <p>Title: {title}</p>
          <p>Post id: {id}</p>
          <p>User ID: {userId}</p>
          {body ? (
            <p>Body: {body}</p>
          ) : (
            <p>completed: {completed ? "Yes" : "No"}</p>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

Item.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
};
