import createInstance from '../utils/instance';

const API = createInstance();

export const getCars = async (config = {}) => {
  const res = await API.get('/cars', config);

  return res;
};
