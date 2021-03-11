const ADD_POSTS_SUUCCESS = 'ADD_POSTS_SUCCESS';
const ADD_POSTS_ERROR = 'ADD_POSTS_ERROR'

export const getPosts = (path) => async (dispatch) => {
  try {
    const data = await fetch(path);
    const result = await data.json();
    dispatch(ACTION_ADD_POSTS_SUCCESS(result));
  } catch (error) {
    dispatch(ACTION_ADD_POSTS_ERROR(error))
  }

}

export const ACTION_ADD_POSTS_SUCCESS = (posts) => {
  return {
    type: ADD_POSTS_SUUCCESS,
    payload: posts
  }
}

export const ACTION_ADD_POSTS_ERROR = (error) => {
  return {
    type: ADD_POSTS_ERROR,
    payload: error
  }
}

export const initialPostsState = {
  posts: []
}

export const posts = (state = initialPostsState, action) => {
  switch (action.type) {
    case ADD_POSTS_SUUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    case ADD_POSTS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return { ...state };
  }
}
