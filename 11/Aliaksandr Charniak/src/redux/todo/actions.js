export const GET_DATA_TODO_REQUESTED = 'GET_DATA_TODO_REQUESTED'
export const GET_DATA_TODO_SUCCEED = 'GET_DATA_TODO_SUCCEED'
export const GET_DATA_TODO_FAILED = 'GET_DATA_TODO_FAILED'

const URL = 'https://jsonplaceholder.typicode.com/todos'

export const ACTION_GET_DATA_TODO_REQUESTED = (id) => async (dispatch, store) => {
  try {
    dispatch({
      type: GET_DATA_TODO_REQUESTED,
    })

    const result = await fetch(URL + `/${id}`)
    const data = await result.json()

    dispatch({
      type: GET_DATA_TODO_SUCCEED,
      payload: data,
    })
  } catch (e) {
    dispatch(ACTION_GET_DATA_TODO_FAILED(e))
  }
}

export const ACTION_GET_DATA_TODO_FAILED = (error) => ({
  type: GET_DATA_TODO_FAILED,
  payload: error,
})
