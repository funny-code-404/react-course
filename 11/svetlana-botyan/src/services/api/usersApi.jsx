import createInstance from '../instance';
import { getUsersListFromServer } from '../utils/mapping/dataFromServer';

const API = createInstance();

export const getAllUsers = async (config = {}) => {
  const response = await API.get('/users', config);

  return getUsersListFromServer(response);
};
