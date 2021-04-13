export const ADD_CIVS_SUCCESS = 'ADD_CIVS_SUCCESS';
export const ADD_CIVS_ERROR = 'ADD_CIVS_ERROR';
export const ADD_CIVS_REQUESTED = 'ADD_CIVS_REQUESTED'


export const addCivsSuccess = (civs) => {
  return {
    type: ADD_CIVS_SUCCESS,
    payload: civs
  }
}

export const addCivsError = (error) => {
  return {
    type: ADD_CIVS_ERROR,
    payload: error
  }
}

export const addCivsRequested = (url) => {
  return {
    type: ADD_CIVS_REQUESTED,
    payload: url
  }
}
