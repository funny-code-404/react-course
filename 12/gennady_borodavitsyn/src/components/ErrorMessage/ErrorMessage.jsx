import { useSelector } from 'react-redux';
import { isTodosError } from '../../ducks/todos/selectors';

function ErrorMessage() {
  const todosError = useSelector(isTodosError);

  const error = todosError;

  return error && <h1>{error}</h1>;
}

export default ErrorMessage;
