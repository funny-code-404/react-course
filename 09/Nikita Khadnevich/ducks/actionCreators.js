import { NAMES } from './form'
import { ADD_TODO, EDIT_TODO, DELETE_TODO, SHOW_TODOCHANGED, ADD_LIKE} from './todo'

export const ACTION_ON_INPUT_NAME = (value) => {
  return {
    type: NAMES,
    payload: value,
    //3 По сути позвращается объект с тайпом и пайлоад = дата из Компонента
  };
};

export const ACTIONS_ADD_TODO = (value) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
}

export const ACTION_DELETE_TODO = (value) => {
  return {
    type: DELETE_TODO,
    payload: value,
  }
}

export const ACTION_SHOW_TODOCHANGED = (changed, dataset) => {
  return {
    type: SHOW_TODOCHANGED,
    paychanged: changed,
    paydata: dataset
  } 
}

export const ACTION_EDIT_TODO = (value) => {
  return {
    type: EDIT_TODO,
    payload: value,
  }
}

export const ACTIONS_ADD_LIKE = (target, counter) => {
  return {
    type: ADD_LIKE,
    likeTarget: target,
    likeCounter: counter
  };
}