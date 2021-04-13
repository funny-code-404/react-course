// ACTIONS
const ADD_DATA = 'ADD_DATA';
const DELETE_DATA = 'DELETE_DATA';
const EDIT_DATA = 'EDIT_DATA';
//Selectors

//ACTION_CREATORS
export const ACTION_ADD_DATA = value => {
  return {
    type: ADD_DATA,
    payload: value
  }
}

export const ACTION_DELETE_DATA = value => {
  return {
    type: DELETE_DATA,
    payload: value
  }
}

export const ACTION_EDIT_DATA = value => {
  return {
    type: EDIT_DATA,
    payload: value
  }
}

//STATE
export const initialFormState = {
  data: [],
}
//REDUCERS

export const form = (state = initialFormState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter(element =>
          String(element.id) !== String(action.payload))
      }
    case EDIT_DATA:
      return {
        ...state,
        data: state.data.map(element => {
          return (
            String(element.id) === String(action.payload.id) ?
            action.payload :
            element
          )
        })
      }
    default:
      return {
        ...state
      }
  }
}
