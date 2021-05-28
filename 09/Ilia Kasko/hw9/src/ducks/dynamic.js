export const REGISTRATION = 'REGISTRATION';
export const ENTRY = 'ENTRY';
export const DELETE = 'DELETE'

export const initialDynamicState = {
  dynamicForm: '',

};

export const dynamic = (state = initialDynamicState, action) => {
  switch(action.type) {
    case REGISTRATION: return {
      ...state,
      dynamicForm: REGISTRATION
    }
    case ENTRY: return {
      ...state,
      dynamicForm: ENTRY
    }
    case DELETE: return {
      ...state,
      dynamicForm: DELETE
    }
    default: return { ...state };
  }
};