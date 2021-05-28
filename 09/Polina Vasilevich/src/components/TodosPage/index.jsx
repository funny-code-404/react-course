import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@components/List";
import { ACTION_GET_TODOS } from "@ducks/todos";
import { URL_TODOS } from "@constants/api";

const TodosPage = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(ACTION_GET_TODOS(URL_TODOS));
  }, [dispatch]);

  return !!todos.length && <List data={todos} path="/todos/" />;
};

export default TodosPage;
