import React, { useState } from 'react'

import EntryForm from '../EntryForm'

export const NAME_PLACEHOLDER = 'Имя'
export const EMAIL_PLACEHOLDER = 'Почта'
export const PASSWORD_PLACEHOLDER = 'Пароль'

const LoginForm = ({ action, Component }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') setName(value)
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
  }
  return (
    <form>
      <input value={name} name="name" placeholder={NAME_PLACEHOLDER} onChange={handleChange} />
      <input value={email} name="email" placeholder={EMAIL_PLACEHOLDER} onChange={handleChange} />
      <input
        value={password}
        name="password"
        placeholder={PASSWORD_PLACEHOLDER}
        onChange={handleChange}
      />
      {+action === 1 && <EntryForm />}
      {(+action === 2 || +action === 3) && Component && <Component />}
    </form>
  )
}

export default LoginForm
