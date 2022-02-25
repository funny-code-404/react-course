import { combineReducers } from 'redux';

import { commentsReducer } from '../ducks/comments';

const reducers = {
    comments: commentsReducer,
     };
  
  export const reducer = combineReducers({
    ...reducers,
  });
