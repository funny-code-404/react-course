import createInstance from '../instance';
import { getReviewrsListFromServer } from '../utils/mapping/dataFromServer';

const API = createInstance();

export const getAllReviews = async (config = {}) => {
  const response = await API.get('/todos', config);

  return getReviewrsListFromServer(response);
};
