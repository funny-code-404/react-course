import { useSelector } from 'react-redux';
import { isTodosFetching } from '../../ducks/todos/selectors';

function Preloader() {
  const todosFetching = useSelector(isTodosFetching);

  const isFetching = todosFetching;

  return isFetching && <h1>LOADING...</h1>;
}

export default Preloader;
