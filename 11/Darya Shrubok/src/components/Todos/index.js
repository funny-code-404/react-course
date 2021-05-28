import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_GET_DATA_REQUESTED } from "../../ducks/todos";

import Error from "../Error";

const Todos = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos.data);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(ACTION_GET_DATA_REQUESTED());
  }, []);

  return (
    <div className="navigation">
      {error && <Error text={error} />}
      {Boolean(data?.length) && (
          data.map((item) => {
            return (
              <Link
                to={`/todos/${item.id}`}
                key={item.id}
                className={item.completed ? "completed" : "pending"}
              >
                {item.title}
              </Link>
            );
          })
      )}
    </div>
  );
};

export default Todos;
