export const INPUT_TEXT = "INPUT_TEXT";
export const TEXTAREA_TASK = "TEXTAREA_TASK";
export const UPDATE_TASKS = "UPDATE_TASKS";
export const EDIT_TASK = "EDIT_TASK";
export const CLEAR_STATE = "CLEAR_STATE";

export const ACTION_INPUT_TEXT = (value) => ({
  type: INPUT_TEXT,
  payload: value,
});

export const ACTION_CLEAR_STATE = () => ({
  type: CLEAR_STATE,
});

export const ACTION_TEXTAREA_TASK = (value) => ({
  type: TEXTAREA_TASK,
  payload: value,
});

export const ACTION_UPDATE_TASKS = (value) => ({
  type: UPDATE_TASKS,
  payload: value,
});

export const ACTION_EDIT_TASK = (value) => ({
  type: EDIT_TASK,
  payload: value,
});

export const initialFormState = {
  title: "",
  task: "",
  selectedId: "",
  tasks: [],
};

export const form = (state = initialFormState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        title: action.payload,
      };
    case TEXTAREA_TASK:
      return {
        ...state,
        task: action.payload,
      };
    case UPDATE_TASKS:
      let tasks = [...state.tasks, action.payload];
      const selectedTaskIndex = state.tasks.findIndex(
        (item) => item.id === action.payload.id
      );

      if (selectedTaskIndex !== -1) {
        tasks = state.tasks.map((item, index) =>
          index === selectedTaskIndex ? action.payload : item
        );
      }

      return {
        ...state,
        tasks,
      };
    case EDIT_TASK:
      const selectedTask = state.tasks.find(
        (item) => item.id === action.payload
      );

      return {
        ...state,
        title: selectedTask.title,
        task: selectedTask.task,
        selectedId: selectedTask.id,
      };
    case CLEAR_STATE:
      return {
        ...state,
        task: "",
        title: "",
        selectedId: "",
      };
    default:
      return {
        ...state,
      };
  }
};
