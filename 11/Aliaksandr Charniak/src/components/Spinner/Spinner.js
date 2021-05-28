import React from 'react'
import { useSelector } from 'react-redux'

export const Spinner = () => {
  const isPostsFetching = useSelector((state) => state.posts.isFetching)
  const isPostFetching = useSelector((state) => state.post.isFetching)
  const isTodosFetching = useSelector((state) => state.todos.isFetching)
  const isTodoFetching = useSelector((state) => state.todo.isFetching)

  const isLoading = isPostsFetching || isPostFetching || isTodosFetching || isTodoFetching

  return (
    <p
      style={{
        width: '100%',
        height: '78vh',
        position: 'fixed',
        background: 'gray',
        display: isLoading ? 'block' : 'none',
        margin: 0,
      }}
    >
      L O A D I N G...
    </p>
  )
}

export default Spinner
