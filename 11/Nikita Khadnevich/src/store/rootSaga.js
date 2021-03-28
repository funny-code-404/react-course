import { all } from 'redux-saga/effects';
import { watchTodosSaga } from '../ducks/todos/sagas';

function* rootSaga() {
  yield all([watchTodosSaga()]);
}

export default rootSaga;
