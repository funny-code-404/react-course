import { useSelector } from 'react-redux';
import { isUsersFetching } from '../../ducks/users/selectors';

const Preloader = () => {
  const usersFetching = useSelector(isUsersFetching);

  const isFetching = usersFetching;

  return isFetching && <h1>LOADING...</h1>;
};

export default Preloader;
