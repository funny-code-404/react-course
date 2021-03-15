import axios from 'axios';

export const baseUrl = 'https://jsonplaceholder.typicode.com';


// export const defaultConfig = {
//   headers: {
//     Accept: 'application/json',
//   },
// };

export const API = { //АПИ в себе содержит объект, коим является функция-запрос
   getAxios(path) {
      return axios.get(`${baseUrl}${path}`)
         .then(res => res.data)
   },

   postAxios(path, obj) {
      return axios.post(`${baseUrl}${path}`, obj)
      .then(res => res) // Результат ответа от сервера)
   },

   deleteAxios(path, id) {
      return axios.delete(`${baseUrl}${path}` + `/` + `${id}`)
      .then(res => res)
   }

//   request(url, config = {}) {
//     return fetch(url, {
//       ...defaultConfig,
//       config,
//     });
//   },
//   get(path) {
//     return this.request(`${baseUrl}${path}`);
//   },
};
