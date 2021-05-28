export const SET_REVIEW = 'SET_REVIEW'
export const SET_RATING = 'SET_RATING'

export const ACTION_SET_REVIEW = ({ payload }) => {
  return {
    type: SET_REVIEW,
    payload,
  }
}

export const ACTION_SET_RATING = ({ payload }) => {
  return {
    type: SET_RATING,
    payload,
  }
}

export const initialDeleteFormState = {
  review: '',
  rating: 5,
}

export const deleteForm = (state = initialDeleteFormState, action) => {
  switch (action.type) {
    case SET_REVIEW:
      return {
        ...state,
        review: action.payload,
      }
    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
