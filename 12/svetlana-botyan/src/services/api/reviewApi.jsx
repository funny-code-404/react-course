import createInstance from '../instanse';
import { getReviewrsListFromServer } from '../utils/mapping/dataFromServer';

const API = createInstance();

export const getAllReviews = async (config = {}) => {
  const response = await API.get('/reviews', config);

  return getReviewrsListFromServer(response);
};

export const addReview = async (obj) => {
  await API.post('/reviews', obj);

  const response = await API.get('/reviews');
  return getReviewrsListFromServer(response);
};

export const deleteReview = async (obj) => {
  await API.delete('/reviews', { data: obj });

  const response = await API.get('/reviews');
  return getReviewrsListFromServer(response);
};

export const updateReview = async (obj) => {
  await API.patch('/reviews', obj);

  const response = await API.get('/reviews');
  return getReviewrsListFromServer(response);
};
