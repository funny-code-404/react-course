import createInstance from '../../services/instance';
import { getSomePostsFromServer } from '../utils/mapping/dataFromServer';

const API = createInstance();

export const getSomePosts = async (config = {}) => {
  const res = await API.get('/posts', config);

  return getSomePostsFromServer(res);
};
