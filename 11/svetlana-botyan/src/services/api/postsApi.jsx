import createInstance from '../instance';
import { getPostsListFromServer } from '../utils/mapping/dataFromServer';

const API = createInstance();

export const getAllPosts = async (config = {}) => {
  const response = await API.get('/posts', config);

  return getPostsListFromServer(response);
};
