// category: "обычное"
// created_at: "2022-01-28T20:17:50.848Z"
// done: true
// id: 1252
// title: "Новый заголовок - Sun Feb 20 2022 13:08:47 GMT+0300 (Москва, стандартное время)"
// updated_at: "2022-02-20T10:08:47.361Z"
// url: "https://todoappexamplejs.herokuapp.com/items/1252.json"

export const getTodoListFromServer = ({ data }) =>
  data.map(({ category, created_at, done, updated_at, url, ...rest }) => ({
    ...rest,
  }));
