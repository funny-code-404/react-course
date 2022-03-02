const api = {
    request: async (url, params = {}) => {
        const res = await fetch(url, params);
        const data = await res.json();


        return data;
    },
    get: async (url) => {
        const data = await api.request(url);

        return data;
    },
    post: async (url, params) => {
        const data = await api.request(url, {
            metod: 'POST',
            ...params,
        });

        return data;
    },
    put: () => {},
    delete: () => {},
};

export const userApi = {
    getUsers: async (url) => {
        return api.get(url);
    }
};

export const API = {
    userApi,
};