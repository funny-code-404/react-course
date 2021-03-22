import store from '../store';

export const ACTION_ON_INPUT_NAME = (value) => {
  const state = store.getState();

  console.log(state);

  return {
    type: 'NAMES',
    payload: value,
  };
};

export const ACTION_ON_INPUT_EMAIL = (value) => {
  return {
    type: 'EMAIL',
    payload: value,
  };
};

export const ACTION_ON_INPUT_PASSWORD = (value) => {
  return {
    type: 'PASSWORD',
    payload: value,
  };
};

export const ACTION_ON_INPUT_SECNAME = (value) => {
  return {
    type: 'SECNAME',
    payload: value,
  };
};


export const ACTION_ON_INPUT_YEARBIRH= (value) => {
  return {
    type: 'BIRTH',
    payload: value,
  };
};

export const ACTION_ON_INPUT_TELNUMB= (value) => {
  return {
    type: 'TELEPHONE',
    payload: value,
  };
};