import createInstance from '../instance';
import { getSomeAlbumsFromServer } from '../utils/mapping/dataFromServer';

const API = createInstance();

export const getSomeAlbums = async (config = {}) => {
  const res = await API.get('/albums', config);

  return getSomeAlbumsFromServer(res);
};
