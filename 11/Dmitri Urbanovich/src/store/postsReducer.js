const initialState = {
    posts: [],
  };
  
  const GET_POSTS = 'GET_POSTS';
  
  export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POSTS:
        return { ...state, posts: [...state.posts, ...action.payload] };
      default:
        return state;
    }
  };
  
  export const GET_POSTS_ACTION = payload => ({ type: GET_POSTS, payload });
  