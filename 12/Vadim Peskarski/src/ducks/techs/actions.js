export const ADD_TECHS_SUCCESS = 'ADD_TECHS_SUCCESS';
export const ADD_TECHS_ERROR = 'ADD_TECHS_ERROR';
export const ADD_TECHS_REQUESTED = 'ADD_TECHS_REQUESTED'


export const addTechsSuccess = (techs) => {
  return {
    type: ADD_TECHS_SUCCESS,
    payload: techs
  }
}

export const addTechsError = (error) => {
  return {
    type: ADD_TECHS_ERROR,
    payload: error
  }
}

export const addTechsRequested = (url) => {
  return {
    type: ADD_TECHS_REQUESTED,
    payload: url
  }
}
