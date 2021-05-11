import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class ListItem extends React.Component {
  static propTypes = {
    deleteItem: PropTypes.func.isRequired,
    isDoneChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isDone: PropTypes.bool.isRequired,
  }

  deleteHandleClick = (e) => {
    const { deleteItem } = this.props
    const { id } = e.target.parentElement
    deleteItem(id)
  }

  onChangeHandle = (e) => {
    const { isDoneChange } = this.props
    const { checked, parentElement } = e.target
    isDoneChange(parentElement.id, checked)
  }

  render() {
    const { value, id, isDone } = this.props
    return (
      <li id={id}>
        <h1 className={isDone ? 'isDone' : ''}>{value}</h1>
        <button onClick={this.deleteHandleClick}>Удалить</button>
        <input type="checkbox" id="isDone" checked={isDone} onChange={this.onChangeHandle} />
      </li>
    )
  }
}

export default ListItem
