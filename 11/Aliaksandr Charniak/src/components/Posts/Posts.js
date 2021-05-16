import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ACTION_GET_DATA_POSTS_REQUESTED } from '../../redux/posts/actions'

import List from '../List'

export const Posts = (props) => {
  const { posts } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ACTION_GET_DATA_POSTS_REQUESTED())
  }, [dispatch])
  return (
    <div>
      <h1>LIST OF POSTS:</h1>
      <List data={posts} path="posts" />
    </div>
  )
}

export default Posts
