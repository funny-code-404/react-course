// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

export const getSomePostsFromServer = ({ data }) =>
  data
    .slice(0, 5)
    .map(({ userId, ...rest }) => ({ ...rest, postBody: rest.body }));

// "userId": 1,
// "id": 1,
// "title": "quidem molestiae enim"

export const getSomeAlbumsFromServer = ({ data }) =>
  data.slice(0, 15).map(({ userId, ...rest }) => ({ ...rest }));
