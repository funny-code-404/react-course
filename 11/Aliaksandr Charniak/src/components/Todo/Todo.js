import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ACTION_GET_DATA_TODO_REQUESTED } from '../../redux/todo/actions'

export const Todo = (props) => {
  const { id } = props.match.params
  const { todo } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ACTION_GET_DATA_TODO_REQUESTED(id))
  }, [dispatch, id])
  return (
    todo && (
      <div>
        <h3>UserId: {todo.userId}</h3>
        <h3>Id: {todo.id}</h3>
        <h3>Title: {todo.title}</h3>
        <h3>Completed: {todo.completed?.toString()}</h3>
      </div>
    )
  )
}

export default Todo
