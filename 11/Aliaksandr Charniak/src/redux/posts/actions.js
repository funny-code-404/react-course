export const GET_DATA_POSTS_REQUESTED = 'GET_DATA_POSTS_REQUESTED'
export const GET_DATA_POSTS_SUCCEED = 'GET_DATA_POSTS_SUCCEED'
export const GET_DATA_POSTS_FAILED = 'GET_DATA_POSTS_FAILED'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export const ACTION_GET_DATA_POSTS_REQUESTED = () => async (dispatch, store) => {
  try {
    dispatch({
      type: GET_DATA_POSTS_REQUESTED,
    })

    const result = await fetch(URL)
    const data = await result.json()

    dispatch({
      type: GET_DATA_POSTS_SUCCEED,
      payload: data,
    })
  } catch (e) {
    dispatch(ACTION_GET_DATA_POSTS_FAILED(e))
  }
}

export const ACTION_GET_DATA_POSTS_FAILED = (error) => ({
  type: GET_DATA_POSTS_FAILED,
  payload: error,
})
