import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ACTION_GET_TODOS } from "../../ducks/todos";
import { API_TODOS } from "../../constants/api";

const TodosPage = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(ACTION_GET_TODOS(API_TODOS));
  }, []);

  return (
    <div>
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/todos/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPage;
