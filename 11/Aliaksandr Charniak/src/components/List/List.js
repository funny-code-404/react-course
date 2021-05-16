import React from 'react'
import ListItem from '../ListItem'

export const List = (props) => {
  const { data, path } = props
  return <ul>{data && data?.map((item) => <ListItem key={item.id} path={path} {...item} />)}</ul>
}

export default List
