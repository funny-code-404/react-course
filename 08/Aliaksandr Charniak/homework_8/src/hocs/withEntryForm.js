import React from 'react'

const withEntryForm = (Component) => (props) => {
  return <Component action={1} />
}

export default withEntryForm
