import React from 'react'

import PropTypes from 'prop-types'

class ActionButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

  handleClick = (e) => {
    const { id } = e.target
    const { onClick } = this.props

    onClick(id)
  }

  render() {
    return (
      <div>
        <button id="1" onClick={this.handleClick}>
          Войти
        </button>
        <button id="2" onClick={this.handleClick}>
          Зарегистрироваться
        </button>
        <button id="3" onClick={this.handleClick}>
          Удалить аккаунт
        </button>
      </div>
    )
  }
}

export default ActionButton
