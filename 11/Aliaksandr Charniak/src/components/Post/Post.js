import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ACTION_GET_DATA_POST_REQUESTED } from '../../redux/post/actions'

export const Post = (props) => {
  const { id } = props.match.params
  const { post } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ACTION_GET_DATA_POST_REQUESTED(id))
  }, [dispatch, id])
  return (
    post && (
      <div>
        <h3>UserId: {post.userId}</h3>
        <h3>Id: {post.id}</h3>
        <h3>Title: {post.title}</h3>
        <h3>Body: {post.body}</h3>
      </div>
    )
  )
}

export default Post
