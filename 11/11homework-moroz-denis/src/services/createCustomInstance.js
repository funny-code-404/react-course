import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const createInstance = (customConfig = {}) => {
  const newConfig = {
    ...config,
    ...customConfig,
  };

  const instance = axios.create(newConfig);

  return instance;
};
