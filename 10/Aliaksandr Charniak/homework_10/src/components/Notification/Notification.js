import React from 'react'
import { connect } from 'react-redux'

import { ACTION_DELETE_NOTIFICATION, ACTION_COMPLETE_NOTIFICATION } from '../../redux/data/actions'

import './styles.css'

class Notification extends React.Component {
  handleClick = (e) => {
    const { deleteNotification, completeNotification, item } = this.props
    const { name } = e.target
    if (name === 'complete') {
      completeNotification(item)
    } else {
      deleteNotification(item)
    }
  }

  render() {
    const { item } = this.props
    return (
      <main className={item.outdated ? 'outdated' : 'card'}>
        {item && (
          <div>
            <h2 className={item.completed ? 'textlinethrough' : ''}>Text: {item.text}</h2>
            <h4>Author: {item.author}</h4>
            <button onClick={this.handleClick} name="complete">
              ✓
            </button>
            <button onClick={this.handleClick} name="delete">
              X
            </button>
          </div>
        )}
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteNotification: (payload) => dispatch(ACTION_DELETE_NOTIFICATION(payload)),
  completeNotification: (payload) => dispatch(ACTION_COMPLETE_NOTIFICATION(payload)),
})

export default connect(null, mapDispatchToProps)(Notification)
