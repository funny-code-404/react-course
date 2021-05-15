import React, { useState } from 'react'

export const REVIEW_PLACEHOLDER = 'Имя'

const DeleteForm = () => {
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(5)

  const handleClick = (e) => {
    alert('Вы успешно оценили работу приложения и удалили его!')
  }

  const handleChange = (e) => {
    const { value } = e.target
    setReview(value)
  }

  const hanleRadioChange = (e) => {
    const { value } = e.target
    setRating(+value)
  }

  return (
    <div>
      <h1>Удаление аккаунта</h1>
      <textarea
        id="review"
        name="review"
        rows="5"
        cols="20"
        value={review}
        placeholder={REVIEW_PLACEHOLDER}
        onChange={handleChange}
      />
      <p>Оцените работу приложения</p>
      <div onChange={hanleRadioChange}>
        <input type="radio" name="one" value="1" />
        <input type="radio" name="two" value="2" />
        <input type="radio" name="three" value="3" />
        <input type="radio" name="four" value="4" />
        <input type="radio" name="five" value="5" />
      </div>
      <button onClick={handleClick}>Отправить</button>
    </div>
  )
}

export default DeleteForm
