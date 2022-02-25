import { all } from 'redux-saga/effects';
import { usersSaga } from '../ducks/users/sagas';


export function* rootSaga() {
  console.log('ROOTSAGA');
    yield all([usersSaga()]);   
  
  }