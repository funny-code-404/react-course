import { GET_POSTS_ACTION } from '../store/postsReducer';

export const fetchPosts = () => {
  return dispatch => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => dispatch(GET_POSTS_ACTION(json)));
    } catch (e) {
      console.dir(e);
    }
  };
};
