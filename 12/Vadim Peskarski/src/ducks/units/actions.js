export const ADD_UNITS_SUCCESS = 'ADD_UNITS_SUCCESS';
export const ADD_UNITS_ERROR = 'ADD_UNITS_ERROR';
export const ADD_UNITS_REQUESTED = 'ADD_UNITS_REQUESTED'


export const addUnitsSuccess = (units) => {
  return {
    type: ADD_UNITS_SUCCESS,
    payload: units
  }
}

export const addUnitsError = (error) => {
  return {
    type: ADD_UNITS_ERROR,
    payload: error
  }
}

export const addUnitsRequested = (url) => {
  return {
    type: ADD_UNITS_REQUESTED,
    payload: url
  }
}
