import { useSelector } from 'react-redux';
import { isPostsFetching } from '../../ducks/posts/selectors';
import { isAlbumsFetching } from '../../ducks/albums/selectors';

function Preloader() {
  const postsFetching = useSelector(isPostsFetching);
  const albumsFetching = useSelector(isAlbumsFetching);

  const isFetching = postsFetching || albumsFetching;

  return isFetching && <h1>LOADING...</h1>;
}

export default Preloader;
