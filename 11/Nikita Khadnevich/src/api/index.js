export const baseUrl = 'https://jsonplaceholder.typicode.com';

export const defaultConfig = {
  headers: {
    Accept: 'application/json',
  },
};

export const API = {
  request(url, config = {}) {
    return fetch(url, {
      ...defaultConfig,
      config,
    });
  },
  get(path) {
    return this.request(`${baseUrl}${path}`);
  },
};
