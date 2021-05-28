import React from 'react'
import { Link } from 'react-router-dom'

export const ListItem = (props) => {
  const { id, title, path } = props
  return (
    <li>
      <Link
        to={{
          pathname: `/${path}/${id}`,
        }}
      >
        {title}
      </Link>
    </li>
  )
}
export default ListItem
