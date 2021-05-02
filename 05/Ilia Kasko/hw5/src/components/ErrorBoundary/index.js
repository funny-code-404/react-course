import React from 'react'

class ErrorBoundary extends React.Component {

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
        return error ? <h1>ooopppsss...</h1> : <div>{children}</div>
    }
}

export default ErrorBoundary