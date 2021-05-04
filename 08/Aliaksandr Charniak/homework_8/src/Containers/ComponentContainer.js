import React from 'react'

import RegisterForm from '../components/RegisterForm'
import DeleteForm from '../components/DeleteForm'

export const ComponentContainer = (props) => {
  return <div>{RegisterForm && props.render(RegisterForm)}</div>
}

export const ComponentContainerWithChildren = (props) => {
  return <div>{DeleteForm && props.children(DeleteForm)}</div>
}
