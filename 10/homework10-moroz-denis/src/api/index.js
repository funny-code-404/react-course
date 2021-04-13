export const baseUrl = 'https://age-of-empires-2-api.herokuapp.com/api/v1';

export const defaultConfig = {
    headers: {
        Accept: 'application/json',
    }
}

export const API = {
    request(url, config = {}) {
        return fetch(url, {
            ...defaultConfig,
            ...config,
        });
    },
    get(path, config = {}) {
        return this.request(`${baseUrl}${path}`, config);
    },
    post(path, config = {}) {},
    put(path, config = {}) {},
    patch(path, config = {}) {},
    delete(path, config = {}) {},
};