import React from 'react'

import PropTypes from 'prop-types'

export const REVIEW_PLACEHOLDER = 'Имя'

class DeleteForm extends React.Component {
  static propTypes = {
    deleteForm: PropTypes.object.isRequired,
    setReview: PropTypes.func.isRequired,
    setRating: PropTypes.func.isRequired,
  }

  handleClick = (e) => {
    alert('Вы успешно оценили работу приложения и удалили его!')
  }

  handleChange = (e) => {
    const { value } = e.target
    const { setReview } = this.props

    setReview(value)
  }

  hanleRadioChange = (e) => {
    const { value } = e.target
    const { setRating } = this.props

    setRating(+value)
  }

  render() {
    const {
      deleteForm: { review },
    } = this.props
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
          onChange={this.handleChange}
        />
        <p>Оцените работу приложения</p>
        <div onChange={this.hanleRadioChange}>
          <input type="radio" name="one" value="1" />
          <input type="radio" name="two" value="2" />
          <input type="radio" name="three" value="3" />
          <input type="radio" name="four" value="4" />
          <input type="radio" name="five" value="5" />
        </div>
        <button onClick={this.handleClick}>Отправить</button>
      </div>
    )
  }
}

export default DeleteForm
