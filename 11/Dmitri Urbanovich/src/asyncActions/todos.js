import { GET_TODOS_ACTION } from '../store/todosReducer';

export const fetchTodos = () => {
  return dispatch => {
    try {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => dispatch(GET_TODOS_ACTION(json)));
    } catch (e) {
      console.dir(e);
    }
  };
};
