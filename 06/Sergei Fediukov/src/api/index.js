export const baseUrl = 'https://private-anon-8de7e119e1-carsapi1.apiary-mock.com/cars';

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
    get(config = {}) {
        return this.request(`${baseUrl}`, config);
    },
    // post(path, config = {}) { },
    // put(path, config = {}) { },
    // patch(path, config = {}) { },
    // delete(path, config = {}) { },
};
