import React, { useState } from 'react'

export const SURNAME_PLACEHOLDER = 'Фамилия'
export const YEAR_OF_BIRTH_PLACEHOLDER = 'Год рождения'
export const PHONE_PLACEHOLDER = 'Телефон'

const RegisterForm = () => {
  const [surname, setSurname] = useState('')
  const [yearOfBirth, setYearOfBirth] = useState('')
  const [phone, setPhone] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'surname') setSurname(value)
    if (name === 'yearOfBirth') setYearOfBirth(value)
    if (name === 'phone') setPhone(value)
  }

  const handleClick = (e) => {
    alert('Регистрация прошла успешно!')
  }

  return (
    <div>
      <h1>Регистрация</h1>
      <input
        value={surname}
        name="surname"
        placeholder={SURNAME_PLACEHOLDER}
        onChange={handleChange}
      />
      <input
        value={yearOfBirth}
        name="yearOfBirth"
        placeholder={YEAR_OF_BIRTH_PLACEHOLDER}
        onChange={handleChange}
      />
      <input value={phone} name="phone" placeholder={PHONE_PLACEHOLDER} onChange={handleChange} />
      <button onClick={handleClick}>Зарегистрироваться</button>
    </div>
  )
}

export default RegisterForm
