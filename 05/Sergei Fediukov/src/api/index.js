export const baseUrl = 'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1';
export const defaultConfig = {
    headers: {
        Accept: 'application/json',
    }
};
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
    post(path, config = {}) { },
    put(path, config = {}) { },
    patch(path, config = {}) { },
    delete(path, config = {}) { },
};

export const getData = async (action) => {
    const res = await API.get(action.path);
    const json = await res.json();
    const data = json[action.path.substr(1)]
    return data
}

export const getDetails = async (action) => {
    const res = await API.get(action.path);
    const data = await res.json()
    return data
}