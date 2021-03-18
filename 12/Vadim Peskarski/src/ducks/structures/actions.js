export const ADD_STRUCTURES_SUCCESS = 'ADD_STRUCTURES_SUCCESS';
export const ADD_STRUCTURES_ERROR = 'ADD_STRUCTURES_ERROR';
export const ADD_STRUCTURES_REQUESTED = 'ADD_STRUCTURES_REQUESTED'


export const addStructuresSuccess = (structures) => {
  return {
    type: ADD_STRUCTURES_SUCCESS,
    payload: structures
  }
}

export const addStructuresError = (error) => {
  return {
    type: ADD_STRUCTURES_ERROR,
    payload: error
  }
}

export const addStructuresRequested = (url) => {
  return {
    type: ADD_STRUCTURES_REQUESTED,
    payload: url
  }
}
