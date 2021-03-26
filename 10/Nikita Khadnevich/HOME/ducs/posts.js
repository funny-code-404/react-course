export const GET_POSTS_SUCCEED = 'GET_POSTS_SUCCEED';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';
export const GET_POSTS_REQUESTED = 'GET_POSTS_REQUESTED';
import { API } from '../api/RestApi'


//Задаем Инит стэйт
export const initialPostsState = {
   isFetching: false,
   Arrdata: [],
   error: null,
}

export const getPostsRequested = () => (
   {
      type: GET_POSTS_REQUESTED  
   }
)
export const getPostsSucceed = (data) => (
   {
      type: GET_POSTS_SUCCEED,
      data,
   }
)
export const getPostsFailed = (error) => (
   {
      type: GET_POSTS_FAILED,
      error,
   }
)

// Создайем Мидлварку
export const ACTION_GET_POSTS = (path) => async (dispatch) => {
  try {
      dispatch(getPostsRequested())

      // const res = await API.get(path)
      // const data = await res.json();

      const data = await API.getAxios(path);
      console.log('Пришли данные', data)
      dispatch(getPostsSucceed(data));
   } catch (error) { 
      console.dir('Ошибка сервера', error)
      dispatch(getPostsFailed(error));
  }
}; 

export const posts = (state = initialPostsState, action) => {
   switch (action.type) {
      case GET_POSTS_SUCCEED:
         return {
         ...state,
         Arrdata: action.data,
         isFetching: false,
         };
      case GET_POSTS_FAILED:
         return {
         ...state,
         error: 'Чэхи и Паляки поломали сервер',
         isFetching: false,
         };
      case GET_POSTS_REQUESTED:
         return {
         ...state,
         isFetching: true,
         };
      default:
         return { ...state };
   }
};