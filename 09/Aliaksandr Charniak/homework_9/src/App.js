import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import LoginForm from './components/LoginForm'
import ActionButton from './components/ActionButton'

class App extends React.Component {
  static propTypes = {
    actionButton: PropTypes.object.isRequired,
  }
  render() {
    const {
      actionButton: { action },
    } = this.props
    return (
      <div>
        <h1>Redux App</h1>
        <ActionButton />
        {action !== 0 && <LoginForm />}
      </div>
    )
  }
}

export default connect(({ actionButton }) => ({
  actionButton,
}))(App)
