import React from 'react'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    }

    componentDidCatch(err) {
        if (err) {
            this.setState({ hasError: true })
        }
    }

    render() {
        const { hasError } = this.state
        return hasError ? <h1>Warning, you got the error</h1> : this.props.children
    }
}
export default ErrorBoundary