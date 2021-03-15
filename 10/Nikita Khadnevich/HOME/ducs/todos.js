export const GET_TODOS_SUCCEED = 'GET_TODOS_SUCCEED';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
export const GET_TODOS_REQUESTED = 'GET_TODOS_REQUESTED';
import { API } from '../api/RestApi'


//Задаем Инит стэйт
export const initialTODOSState = {
   isFetching: false,
   Arrdata: [],
   error: null,
}

export const getTODOSRequested = () => (
   {
      type: GET_TODOS_REQUESTED  
   }
)
export const getTODOSSucceed = (data) => (
   {
      type: GET_TODOS_SUCCEED,
      data,
   }
)
export const getTODOSFailed = (error) => (
   {
      type: GET_TODOS_FAILED,
      error,
   }
)

// Создайем Мидлварку
export const ACTION_GET_TODOS = (path) => async (dispatch) => {
  try {
      dispatch(getTODOSRequested())

      // const res = await API.get(path)
      // const data = await res.json();

      const data = await API.getAxios(path);
      console.log('Пришли данные', data)
      dispatch(getTODOSSucceed(data));
   } catch (error) { 
      console.dir('Ошибка сервера', error)
      dispatch(getTODOSFailed(error));
  }
}; 

export const TODOS = (state = initialTODOSState, action) => {
   switch (action.type) {
      case GET_TODOS_SUCCEED:
         return {
         ...state,
         Arrdata: action.data,
         isFetching: false,
         };
      case GET_TODOS_FAILED:
         return {
         ...state,
         error: 'Чэхи и Паляки поломали сервер',
         isFetching: false,
         };
      case GET_TODOS_REQUESTED:
         return {
         ...state,
         isFetching: true,
         };
      default:
         return { ...state };
   }
};