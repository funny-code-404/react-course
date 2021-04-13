import store from '../store/index.js';

export const ACTION_ON_NAME_INPUT = (value) => {

  return {
    type: 'NAME_INPUT',
    payload: value
  };
}

export const ACTION_ON_EMAIL_INPUT = (value) => {

  return {
    type: 'EMAIL_INPUT',
    payload: value
  };
}

export const ACTION_ON_PASSWORD_INPUT = (value) => {

  return {
    type: 'PASSWORD_INPUT',
    payload: value
  };
}
