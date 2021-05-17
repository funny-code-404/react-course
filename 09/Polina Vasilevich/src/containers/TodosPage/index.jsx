import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "../../components/List";
import { ACTION_GET_DATA } from "../../ducks/actions/getData";
import { URL_TODOS } from "../../constants/api";

const TodosPage = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(ACTION_GET_DATA(URL_TODOS));
  }, []);

  return <List data={todos} path="/todos/" />;
};

export default TodosPage;
