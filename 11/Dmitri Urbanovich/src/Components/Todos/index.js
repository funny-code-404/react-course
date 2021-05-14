import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../asyncActions/todos';

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h1>TODO</h1>
      {todos.length > 0 ? (
        todos.map(todo => (
          <div key={todo.id} style={{marginBottom: '15px' }}>
           title: {todo.title},
          </div>
        ))
      ) : (
        <div>Данные отсутствуют </div>
      )}
    </div>
  );
}

export default Todos;
