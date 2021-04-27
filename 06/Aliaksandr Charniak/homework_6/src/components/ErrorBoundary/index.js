import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  state = {
    error: null,
  }
  static getDerivedStateFromError(error) {
    return {
      error: true,
    }
  }

  render() {
    const { children } = this.props
    const { error } = this.state
    return error ? <h1>Что-то пошло не так</h1> : <div>{children}</div>
  }
}

export default ErrorBoundary
