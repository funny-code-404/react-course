import React from 'react'

const ActionButton = ({ clickFunction }) => {
  const handleClick = (e) => {
    const { id } = e.target
    clickFunction(id)
  }
  return (
    <div>
      <button id="1" onClick={handleClick}>
        Войти
      </button>
      <button id="2" onClick={handleClick}>
        Зарегистрироваться
      </button>
      <button id="3" onClick={handleClick}>
        Удалить аккаунт
      </button>
    </div>
  )
}

export default ActionButton
