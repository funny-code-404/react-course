import React, { useState } from 'react'

const EntryForm = () => {
  const [isLeaveInSystem, setIsLeaveInSystem] = useState(true)

  const handleClick = (e) => {
    alert('Вы успешно вошли в систему!')
  }

  const onChangeHandle = (e) => {
    const { checked } = e.target
    setIsLeaveInSystem(checked)
  }

  return (
    <div>
      <h1>Вход</h1>
      <label>Оставлять меня в системе</label>
      <input
        type="checkbox"
        id="isLeaveInSystem"
        checked={isLeaveInSystem}
        onChange={onChangeHandle}
      />
      <button onClick={handleClick}>Войти</button>
    </div>
  )
}

export default EntryForm
