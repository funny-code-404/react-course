export const GET_DATA_POST_REQUESTED = 'GET_DATA_POST_REQUESTED'
export const GET_DATA_POST_SUCCEED = 'GET_DATA_POST_SUCCEED'
export const GET_DATA_POST_FAILED = 'GET_DATA_POST_FAILED'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export const ACTION_GET_DATA_POST_REQUESTED = (id) => async (dispatch, store) => {
  try {
    dispatch({
      type: GET_DATA_POST_REQUESTED,
    })

    const result = await fetch(URL + `/${id}`)
    const data = await result.json()

    dispatch({
      type: GET_DATA_POST_SUCCEED,
      payload: data,
    })
  } catch (e) {
    dispatch(ACTION_GET_DATA_POST_FAILED(e))
  }
}

export const ACTION_GET_DATA_POST_FAILED = (error) => ({
  type: GET_DATA_POST_FAILED,
  payload: error,
})
