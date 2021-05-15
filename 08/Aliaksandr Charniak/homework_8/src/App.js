import React, { useState } from 'react'

import LoginForm from './components/LoginForm'
import ActionButton from './components/ActionButton'
import withEntryForm from './hocs/withEntryForm'
import { ComponentContainer, ComponentContainerWithChildren } from './Containers/ComponentContainer'

import './styles.css'

const App = () => {
  const [action, setAction] = useState(0)
  const LoginEntryForm = withEntryForm(LoginForm)
  const handleClick = (id) => {
    setAction(+id)
  }
  return (
    <div>
      {action === 0 && <ActionButton clickFunction={handleClick} />}
      {action === 1 && <LoginEntryForm />}
      {action === 2 && (
        <ComponentContainer
          render={(component) => {
            return <LoginForm action={2} Component={component} />
          }}
        />
      )}
      {action === 3 && (
        <ComponentContainerWithChildren>
          {(component) => <LoginForm action={3} Component={component} />}
        </ComponentContainerWithChildren>
      )}
    </div>
  )
}

export default App
