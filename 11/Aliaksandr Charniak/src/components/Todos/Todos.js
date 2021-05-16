import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ACTION_GET_DATA_TODOS_REQUESTED } from '../../redux/todos/actions'

import List from '../List'

export const Todos = (props) => {
  const { todos } = props
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ACTION_GET_DATA_TODOS_REQUESTED())
  }, [dispatch])
  return (
    <div>
      <h1>LIST OF TODOS:</h1>
      <List data={todos} path="todos" />
    </div>
  )
}

export default Todos
