import { initialTodoListState } from '../ducks/todos';
import { initialEditingState } from '../ducks/editing';

export const initialState = {
    todos: initialTodoListState,
    isEditing: initialEditingState,
};