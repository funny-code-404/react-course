import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { ACTION_ADD_NOTIFICATION } from '../../redux/data/actions'

class Form extends React.Component {
  state = {
    notification: '',
    author: '',
  }

  handleClick = (e) => {
    e.preventDefault()
    const { addNotification } = this.props
    const { author, notification } = this.state
    addNotification({
      author: author,
      text: notification,
      completed: false,
      date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()),
      outdated: false,
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  render() {
    const { notification, author } = this.state
    return (
      <form className="form">
        <input
          value={notification}
          name="notification"
          placeholder="Notification"
          onChange={this.handleChange}
        />
        <input value={author} name="author" placeholder="Author" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add notification</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNotification: (payload) => dispatch(ACTION_ADD_NOTIFICATION(payload)),
})

export default connect(null, mapDispatchToProps)(Form)
