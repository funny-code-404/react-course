import todos from '../todos';

describe('Todos reducer Unit tests', () => {
  it('should return [] when initial state and action are undefined', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should update initial state by adding 1 Todo to the list', () => {
    const addTodoAction = {
      type: 'ADD_TODO',
      id: 1,
      text: 'Some text 1...',
    };

    expect(todos([], addTodoAction)).toEqual([
      {
        completed: false,
        id: addTodoAction.id,
        text: addTodoAction.text,
      },
    ]);
  });

  it('should update initial state by adding the second Todo to the list', () => {
    const initialState = [
      {
        id: 1,
        text: 'Some text 1...',
        completed: false,
      },
    ];

    const addTodoAction = {
      type: 'ADD_TODO',
      id: 2,
      text: 'Some text 2...',
    };

    expect(todos(initialState, addTodoAction)).toEqual([
      ...initialState,
      {
        id: 2,
        completed: false,
        text: 'Some text 2...',
      },
    ]);
  });

  it('should toggle incomplete Todo to complete', () => {
    const initialState = [
      {
        id: 1,
        text: 'Some text 1...',
        completed: false,
      },
    ];

    const toggleTodoAction = {
      type: 'TOGGLE_TODO',
      id: 1,
    };

    expect(todos(initialState, toggleTodoAction)).toEqual([
      {
        id: 1,
        completed: true,
        text: 'Some text 1...',
      },
    ]);
  });
});
