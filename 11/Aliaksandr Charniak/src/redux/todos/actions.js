export const GET_DATA_TODOS_REQUESTED = 'GET_DATA_TODOS_REQUESTED'
export const GET_DATA_TODOS_SUCCEED = 'GET_DATA_TODOS_SUCCEED'
export const GET_DATA_TODOS_FAILED = 'GET_DATA_TODOS_FAILED'

const URL = 'https://jsonplaceholder.typicode.com/todos'

export const ACTION_GET_DATA_TODOS_REQUESTED = () => async (dispatch, store) => {
  try {
    dispatch({
      type: GET_DATA_TODOS_REQUESTED,
    })

    const result = await fetch(URL)
    const data = await result.json()

    dispatch({
      type: GET_DATA_TODOS_SUCCEED,
      payload: data,
    })
  } catch (e) {
    dispatch(ACTION_GET_DATA_TODOS_FAILED(e))
  }
}

export const ACTION_GET_DATA_TODOS_FAILED = (error) => ({
  type: GET_DATA_TODOS_FAILED,
  payload: error,
})
