export const isTodosError = (state) => state.todos.error;

export const isTodosFetching = (state) => state.todos.isFetching;

export const todosSelector = (state) => state.todos.toDosList;
