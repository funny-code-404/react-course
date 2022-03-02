import { useSelector } from 'react-redux';
import { isUsersError } from '../../ducks/users/selectors';

const ErrorMessage = () => {
  const usersError = useSelector(isUsersError);

  const error = usersError;

  return error && <h1>{error}</h1>;
};

export default ErrorMessage;
