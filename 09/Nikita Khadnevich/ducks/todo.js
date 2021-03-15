export const initialTodoState = {
  todoInit: [],
  isChanged: {
    status: false,
    dataset: '',
    },
  datalike: [{
    target: '',
    counter: 0
  }]
};

//ACTIONS
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SHOW_TODOCHANGED = 'SHOW_TODOCHANGED'
export const ADD_LIKE = 'ADD_LIKE'

// MY SELECTORS
// export const todoSelector = (state) => state.todo.todo;

//ACTIONS CREATORS
export const todo = (prevState = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...prevState,
        todoInit: [...prevState.todoInit, action.payload],
      };
      case DELETE_TODO:
        return {
          ...prevState,
          todoInit: action.payload,
        };
      case  SHOW_TODOCHANGED:
        return {
          ...prevState,
          isChanged: {
            status: action.paychanged,
            dataset: action.paydata
          }
        };  
      case EDIT_TODO:
        return {
          ...prevState,
          todoInit: [...prevState.todoInit],
        };
      case ADD_LIKE:
        return {
          ...prevState,
          datalike: [...prevState.datalike, 
            {target: action.likeTarget,
            counter: action.likeCounter}
          ]};
      default:
        return {
          ...prevState,
        };
  }
};
