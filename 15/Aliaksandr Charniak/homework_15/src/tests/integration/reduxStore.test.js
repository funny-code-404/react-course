import { createStore } from 'redux';

import rootReducer from '../../redux/reducers';
import { addTodo, toggleTodo } from '../../redux/actions';

describe('Redux store integration tests', () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('should add 1 todo', () => {
    const text = 'some text';
    const action = addTodo(text);

    store.dispatch(action);

    const todo = store.getState().todos.find((todo) => todo.text === text);

    expect(todo).toBeTruthy();
    expect(todo.text).toEqual(text);
    expect(todo.completed).toBeFalsy();
  });

  it('should toggle 1 todo', () => {
    const text = 'some text';

    store.dispatch(addTodo(text));
    store.dispatch(toggleTodo(1));

    const todo = store.getState().todos.find((todo) => todo.text === text);

    expect(todo.completed).toBeTruthy();
  });
});
