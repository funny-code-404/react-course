import { useSelector } from 'react-redux';
import { isPostsError } from '../../ducks/posts/selectors';
import { isAlbumsError } from '../../ducks/albums/selectors';

function ErrorMessage() {
  const usersError = useSelector(isPostsError);
  const albumsError = useSelector(isAlbumsError);

  const error = usersError || albumsError;
  return error && <h1>{error}</h1>;
}

export default ErrorMessage;
