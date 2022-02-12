import React from 'react'

import './ErrorBoundary.css'

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  }

  componentDidCatch(error) {
    if (error) {
      this.setState({
        error: error.message,
      })
    }
  }

  render() {
    const { children } = this.props
    const { error } = this.state
    return error ? <div className="error">{error}</div> : <div>{children}</div>
  }
}

export default ErrorBoundary
