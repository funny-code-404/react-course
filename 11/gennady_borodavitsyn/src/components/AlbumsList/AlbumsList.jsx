import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_ALBUMS_DATA_REQUESTED } from '../../ducks/albums/actions';
import { albumsSelector } from '../../ducks/albums/selectors';

function AlbumsList() {
  const dispatch = useDispatch();
  const albumsData = useSelector(albumsSelector);

  useEffect(() => {
    dispatch(ACTION_GET_ALBUMS_DATA_REQUESTED());
  }, [dispatch]);

  return (
    <>
      <h3>Albums:</h3>
      <ul>
        {albumsData.map((album) => (
          <li key={album.id}>
            <h5>{album.title}</h5>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AlbumsList;
