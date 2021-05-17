import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_ITEM_REQUESTED } from "../../ducks/todos";

import Error from "../Error";

const TodosItem = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.todos.item);
  const error = useSelector((state) => state.todos.error);
  const { id } = useParams();

  useEffect(() => {
    dispatch(ACTION_GET_ITEM_REQUESTED(id));
  }, []);

  return (
    <>
    {error && <Error text={error} />}
    {Boolean(item) && (<div className="item">
      <h2>UserId: {item.userId}</h2>
      <h2>Title: {item.title}</h2>
      <h2>Status: {item.completed ? "completed" : "pending"}</h2>
    </div>)}
    </>
  );
};

export default TodosItem;
