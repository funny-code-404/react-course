import { baseUrl, createInstance } from '../createCustomInsatnce';

const API = createInstance();

export const getEmpiresData = (path) =>
    API.get(`${baseUrl}${path}`)
        .then(data => { 
            return { data: data.data };
        })
        .catch(error => {
             throw error; 
        });
