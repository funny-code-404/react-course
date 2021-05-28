import React from 'react'

import PropTypes from 'prop-types'

class EntryForm extends React.Component {
  static propTypes = {
    entryForm: PropTypes.object.isRequired,
    setIsLeaveInSystem: PropTypes.func.isRequired,
  }

  handleClick = (e) => {
    alert('Вы успешно вошли в систему!')
  }

  onChangeHandle = (e) => {
    const { checked } = e.target
    const { setIsLeaveInSystem } = this.props

    setIsLeaveInSystem(checked)
  }

  render() {
    const {
      entryForm: { isLeaveInSystem },
    } = this.props
    return (
      <div>
        <h1>Вход</h1>
        <label>Оставлять меня в системе</label>
        <input
          type="checkbox"
          id="isLeaveInSystem"
          checked={isLeaveInSystem}
          onChange={this.onChangeHandle}
        />
        <button onClick={this.handleClick}>Войти</button>
      </div>
    )
  }
}

export default EntryForm
