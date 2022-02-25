import { call, put, takeLatest } from 'redux-saga/effects';
import {
  TODO_ITEM_REQUESTED,
  GET_TODO_ITEMS_SUCCEED,
  ADD_TODO_ITEM_REQUESTED,
  DELETE_TODO_ITEM_REQUESTED,
  UPDATE_TODO_ITEM_REQUESTED,
  TODO_ITEM_FAILED,
} from './todos';
import {
  getTodoList,
  addTodo,
  deleteTodo,
  updateTodo,
} from '../../services/api/todosApi';

export function* getAllToDos() {
  try {
    const data = yield call(getTodoList);

    yield put(GET_TODO_ITEMS_SUCCEED(data));
  } catch (error) {
    yield put(TODO_ITEM_FAILED(error));
  }
}

export function* addTodoItem(action) {
  try {
    const data = yield call(addTodo, action.payload);

    yield put(GET_TODO_ITEMS_SUCCEED(data));
  } catch (error) {
    yield put(TODO_ITEM_FAILED(error));
  }
}

export function* deleteTodoItem(action) {
  try {
    const data = yield call(deleteTodo, action.payload);

    yield put(GET_TODO_ITEMS_SUCCEED(data));
  } catch (error) {
    yield put(TODO_ITEM_FAILED(error));
  }
}

export function* updateTodoItem(action) {
  try {
    const data = yield call(updateTodo, action.payload.updatedTodo);

    yield put(GET_TODO_ITEMS_SUCCEED(data));
  } catch (error) {
    yield put(TODO_ITEM_FAILED(error));
  }
}

export function* todosSaga() {
  yield takeLatest(TODO_ITEM_REQUESTED, getAllToDos);
  yield takeLatest(ADD_TODO_ITEM_REQUESTED, addTodoItem);
  yield takeLatest(DELETE_TODO_ITEM_REQUESTED, deleteTodoItem);
  yield takeLatest(UPDATE_TODO_ITEM_REQUESTED, updateTodoItem);
}
