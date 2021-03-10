import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { API } from "../api";

export const PostItem = ({ location, match }) => {
  const [item, setItem] = useState(location.state.item);

  useEffect(() => {
    if (!item) {
      API.get(match.url)
        .then((res) => res.json())
        .then((data) => setItem(data));
    }
  }, []);

  if (!item) {
    return <Spinner />;
  }

  const { title, id, userId, body } = item;

  return (
    <div>
      <p>Title: {title}</p>
      <p>Post id: {id}</p>
      <p>User ID: {userId}</p>
      <p>Body: {body}</p>
    </div>
  );
};
