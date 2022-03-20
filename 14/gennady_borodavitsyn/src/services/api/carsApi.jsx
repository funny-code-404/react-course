import createInstance from '../utils/instance';
import { getAllCarsFromServer } from '../../services/utils/mapping/dataFromServer';

const API = createInstance();

export const getCarsData = async (config = {}) => {
  const res = await API.get('/cars', config);

  return getAllCarsFromServer(res);
};
