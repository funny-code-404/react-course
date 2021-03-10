import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { API } from "../api";

export const TodoItem = ({ location, match }) => {
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

  const { title, id, userId, completed } = item;

  return (
    <div>
      <p>title: {title}</p>
      <p>todo id: {id}</p>
      <p>userId: {userId}</p>
      <p>completed: {completed ? "Yes" : "No"}</p>
    </div>
  );
};
